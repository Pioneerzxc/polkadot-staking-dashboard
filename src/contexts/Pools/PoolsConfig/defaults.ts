// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import { PoolsConfigContextState, PoolStats } from 'contexts/Pools/types';

export const stats: PoolStats = {
  counterForPoolMembers: new BN(0),
  counterForBondedPools: new BN(0),
  counterForRewardPools: new BN(0),
  maxPoolMembers: new BN(0),
  maxPoolMembersPerPool: new BN(0),
  maxPools: new BN(0),
  minCreateBond: new BN(0),
  minJoinBond: new BN(0),
};

export const defaultPoolsConfigContext: PoolsConfigContextState = {
  enabled: 0,
  addFavourite: (a) => {},
  removeFavourite: (a) => {},
  favourites: [],
  stats,
};
