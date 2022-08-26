// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import React, { useState, useEffect, useRef } from 'react';
import { useStaking } from 'contexts/Staking';
import { useNetworkMetrics } from 'contexts/Network';
import { AnyApi, MaybeAccount } from 'types';
import {
  ActiveBondedPoolState,
  ActivePoolContextState,
  BondedPool,
  PoolAddresses,
} from 'contexts/Pools/types';
import { rmCommas, localStorageOrDefault, setStateWithRef } from 'Utils';
import { useBalances } from '../../Balances';
import * as defaults from './defaults';
import { useApi } from '../../Api';
import { useConnect } from '../../Connect';
import { usePoolsConfig } from '../PoolsConfig';
import { useBondedPools } from '../BondedPools';
import { usePoolMemberships } from '../PoolMemberships';

export const ActivePoolContext = React.createContext<ActivePoolContextState>(
  defaults.defaultActivePoolContext
);

export const useActivePool = () => React.useContext(ActivePoolContext);

export const ActivePoolProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { api, network, isReady, consts } = useApi();
  const { metrics } = useNetworkMetrics();
  const { eraStakers } = useStaking();
  const { activeAccount } = useConnect();
  const { getAccountBalance } = useBalances();
  const { enabled } = usePoolsConfig();
  const { membership } = usePoolMemberships();
  const { createAccounts } = useBondedPools();

  const { activeEra } = metrics;
  const { existentialDeposit } = consts;

  // stores member's bonded pool
  const [activeBondedPool, setActiveBondedPool] =
    useState<ActiveBondedPoolState>({
      pool: undefined,
    });
  const activeBondedPoolRef = useRef(activeBondedPool);

  // store active bonded pool unsub object
  const [unsubActiveBondedPool, setUnsubActiveBondedPool] =
    useState<AnyApi>(null);

  // currently nominated validators by the activeBonded pool.
  const [poolNominations, setPoolNominations] = useState<any>({
    nominations: defaults.poolNominations,
    unsub: null,
  });
  const poolNominationsRef = useRef(poolNominations);

  // store pool nomination unsub object
  const [unsubPoolNominations, setUnsubPoolNominations] =
    useState<AnyApi>(null);

  // store account target validators
  const [targets, _setTargets] = useState<any>(defaults.targets);
  const targetsRef = useRef(targets);

  // store whether active pool data has been synced.
  // this will be true even if no active pool exists for the active account.
  // We just need confirmation this is the case.
  const [synced, setSynced] = useState<boolean>(false);
  const syncedRef = useRef(synced);

  useEffect(() => {
    return () => {
      unsubscribeAll();
    };
  }, [network, isReady, enabled]);

  const unsubscribeAll = () => {
    if (unsubActiveBondedPool) {
      unsubActiveBondedPool();
    }
    if (unsubPoolNominations) {
      unsubPoolNominations();
    }
  };

  // subscribe to active bonded pool deatils for the active account
  useEffect(() => {
    if (isReady && enabled) {
      setSynced(false);
      subscribeToActiveBondedPool();
    }
    return () => {
      unsubscribeActiveBondedPool();
    };
  }, [network, isReady, enabled, membership]);

  const unsubscribeActiveBondedPool = () => {
    if (unsubActiveBondedPool) {
      unsubActiveBondedPool();
    }
    // reset state
    setStateWithRef(
      {
        pool: undefined,
      },
      setActiveBondedPool,
      activeBondedPoolRef
    );
    setUnsubActiveBondedPool(null);
  };

  // subscribe to pool nominations
  const bondedAddress = activeBondedPoolRef.current.pool?.addresses?.stash;
  useEffect(() => {
    if (isReady && enabled && bondedAddress) {
      subscribeToPoolNominations(bondedAddress);
    }
    return () => {
      unsubscribePoolNominations();
    };
  }, [network, isReady, bondedAddress, enabled]);

  const unsubscribePoolNominations = () => {
    if (unsubPoolNominations) {
      unsubPoolNominations();
    }
    setStateWithRef(
      {
        nominations: defaults.poolNominations,
      },
      setPoolNominations,
      poolNominationsRef
    );
    setUnsubPoolNominations(null);
  };

  const calculatePayout = (
    bondedPool: BondedPool,
    rewardPool: any,
    rewardAccountBalance: BN
  ): BN => {
    if (!membership) return new BN(0);

    // calculate the latest reward account balance minus the existential deposit
    const newRewardPoolBalance = BN.max(
      new BN(0),
      new BN(rewardAccountBalance).sub(existentialDeposit)
    );

    const lastRewardPoolBalance = new BN(rmCommas(rewardPool?.balance ?? '0'));
    let poolTotalEarnings = new BN(rmCommas(rewardPool?.totalEarnings ?? '0'));
    const rewardPoints = new BN(rmCommas(rewardPool?.points ?? '0'));
    const bondedPoints = new BN(rmCommas(bondedPool?.points ?? '0'));
    const memberPoints = new BN(rmCommas(membership?.points ?? '0'));

    // the pool total earning the last time the member claimed his rewards
    const poolTotalEarningsAtLastClaim = new BN(
      rmCommas(membership.rewardPoolTotalEarnings || '')
    );

    // new generated earning
    const generatedEarning = BN.max(
      new BN(0),
      newRewardPoolBalance.sub(lastRewardPoolBalance)
    );

    // update poolTotalEarning
    poolTotalEarnings = poolTotalEarnings.add(generatedEarning);

    // The new points that will be added to the pool. For every unit of balance that has been
    // earned by the reward pool, we inflate the reward pool points by `bonded_pool.points`. In
    // effect this allows each, single unit of balance (e.g. plank) to be divvied up pro rata
    // among members based on points.
    const generatedPoints = bondedPoints.mul(generatedEarning);

    const currentRewardPoints = rewardPoints.add(generatedPoints);

    const generatedEarningSinceLastClaim = BN.max(
      new BN(0),
      poolTotalEarnings.sub(poolTotalEarningsAtLastClaim)
    );

    const memberCurrentRewardPoint = memberPoints.mul(
      generatedEarningSinceLastClaim
    );
    const payout = currentRewardPoints.isZero()
      ? new BN(0)
      : memberCurrentRewardPoint
          .mul(newRewardPoolBalance)
          .div(currentRewardPoints);

    return payout;
  };

  const subscribeToActiveBondedPool = async () => {
    if (!api) {
      return;
    }
    if (!membership) {
      // no membership to handle: update sycning to complete
      setStateWithRef(true, setSynced, syncedRef);
      return;
    }

    const { poolId } = membership;
    const addresses: PoolAddresses = createAccounts(poolId);
    const unsub = await api.queryMulti<[AnyApi, AnyApi, AnyApi, AnyApi]>(
      [
        [api.query.nominationPools.bondedPools, poolId],
        [api.query.nominationPools.rewardPools, poolId],
        [api.query.staking.slashingSpans, addresses.stash],
        [api.query.system.account, addresses.reward],
      ],
      ([bondedPool, rewardPool, slashingSpans, { data: balance }]) => {
        bondedPool = bondedPool?.unwrapOr(undefined)?.toHuman();
        rewardPool = rewardPool?.unwrapOr(undefined)?.toHuman();

        if (rewardPool && bondedPool) {
          const slashingSpansCount = slashingSpans.isNone
            ? 0
            : slashingSpans.unwrap().prior.length + 1;
          const rewardAccountBalance = balance?.free;
          const unclaimedReward = calculatePayout(
            bondedPool,
            rewardPool,
            rewardAccountBalance
          );
          const pool = {
            ...bondedPool,
            id: poolId,
            slashingSpansCount,
            unclaimedReward,
            addresses,
          };

          // set active pool state
          setStateWithRef(
            {
              ...activeBondedPoolRef.current,
              pool,
            },
            setActiveBondedPool,
            activeBondedPoolRef
          );
          // get pool target nominations and set in state
          if (addresses?.stash) {
            const _targets = localStorageOrDefault(
              `${addresses?.stash}_pool_targets`,
              defaults.targets,
              true
            );
            // set pool staking targets
            setStateWithRef(_targets, _setTargets, targetsRef);
          }
        } else {
          setStateWithRef(defaults.targets, _setTargets, targetsRef);
        }
      }
    );

    // set unsub for active bonded pool
    setUnsubActiveBondedPool(unsub);
    return unsub;
  };

  const subscribeToPoolNominations = async (poolBondAddress: string) => {
    if (!api) return;

    const unsub = await api.query.staking.nominators(
      poolBondAddress,
      (nominations: AnyApi) => {
        // set pool nominations
        let _nominations = nominations.unwrapOr(null);
        if (_nominations === null) {
          _nominations = defaults.poolNominations;
        } else {
          _nominations = {
            targets: _nominations.targets.toHuman(),
            submittedIn: _nominations.submittedIn.toHuman(),
          };
        }

        // set pool nominations state
        setStateWithRef(
          {
            nominations: _nominations,
          },
          setPoolNominations,
          poolNominationsRef
        );

        // set unsub for pool nominations
        setUnsubPoolNominations(unsub);

        // update sycning to complete
        setStateWithRef(true, setSynced, syncedRef);
      }
    );
    return unsub;
  };

  /* Sets pools target validators in storage */
  const setTargets = (_targets: any) => {
    const stashAddress = getPoolBondedAccount();
    if (stashAddress) {
      localStorage.setItem(
        `${stashAddress}_pool_targets`,
        JSON.stringify(_targets)
      );
      setStateWithRef(_targets, _setTargets, targetsRef);
    }
  };

  const getPoolUnlocking = () => {
    return membership?.unlocking || [];
  };

  const isBonding = () => {
    return !!activeBondedPoolRef.current.pool;
  };

  const isNominator = () => {
    const roles = activeBondedPoolRef.current.pool?.roles;
    if (!activeAccount || !roles) {
      return false;
    }
    const result =
      activeAccount === roles?.root || activeAccount === roles?.nominator;
    return result;
  };

  const isOwner = () => {
    const roles = activeBondedPoolRef.current.pool?.roles;
    if (!activeAccount || !roles) {
      return false;
    }
    const result =
      activeAccount === roles?.root || activeAccount === roles?.stateToggler;
    return result;
  };

  const isDepositor = () => {
    const roles = activeBondedPoolRef.current.pool?.roles;
    if (!activeAccount || !roles) {
      return false;
    }
    const result = activeAccount === roles?.depositor;
    return result;
  };

  // get the stash address of the bonded pool that the member is participating in.
  const getPoolBondedAccount = () => {
    return activeBondedPoolRef.current.pool?.addresses?.stash || null;
  };

  // get the bond and unbond amounts available to the user
  const getPoolBondOptions = (address: MaybeAccount) => {
    if (!address) {
      return defaults.poolBondOptions;
    }
    const { freeAfterReserve, miscFrozen } = getAccountBalance(address);
    const unlocking = membership?.unlocking || [];
    const points = membership?.points;

    // point to balance ratio is 1
    const active = points ? new BN(points) : new BN(0);
    const freeToUnbond = active;

    // total amount actively unlocking
    let totalUnlocking = new BN(0);
    let totalUnlocked = new BN(0);

    for (const u of unlocking) {
      const { value, era } = u;
      if (activeEra.index > era) {
        totalUnlocked = totalUnlocked.add(value);
      } else {
        totalUnlocking = totalUnlocking.add(value);
      }
    }

    // free transferrable balance that can be bonded in the pool
    const freeToBond = BN.max(
      freeAfterReserve.sub(miscFrozen).sub(totalUnlocking).sub(totalUnlocked),
      new BN(0)
    );

    // total possible balance that can be bonded in the pool
    const totalPossibleBond = BN.max(
      freeAfterReserve.sub(totalUnlocking).sub(totalUnlocked),
      new BN(0)
    );

    return {
      active,
      freeToBond,
      freeToUnbond,
      totalUnlocking,
      totalUnlocked,
      totalPossibleBond,
      totalUnlockChuncks: unlocking.length,
    };
  };

  /*
   * Get the status of nominations.
   * Possible statuses: waiting, inactive, active.
   */
  const getNominationsStatus = () => {
    const nominations = poolNominationsRef.current.nominations?.targets || [];
    const statuses: { [key: string]: string } = {};

    for (const nomination of nominations) {
      const s = eraStakers.stakers.find((_n: any) => _n.address === nomination);

      if (s === undefined) {
        statuses[nomination] = 'waiting';
        continue;
      }
      const exists = (s.others ?? []).find(
        (_o: any) => _o.who === activeAccount
      );
      if (exists === undefined) {
        statuses[nomination] = 'inactive';
        continue;
      }
      statuses[nomination] = 'active';
    }
    return statuses;
  };

  return (
    <ActivePoolContext.Provider
      value={{
        isNominator,
        isOwner,
        isDepositor,
        isBonding,
        getPoolBondedAccount,
        getPoolBondOptions,
        getPoolUnlocking,
        setTargets,
        getNominationsStatus,
        synced,
        activeBondedPool: activeBondedPoolRef.current.pool,
        targets: targetsRef.current,
        poolNominations: poolNominationsRef.current.nominations,
      }}
    >
      {children}
    </ActivePoolContext.Provider>
  );
};
