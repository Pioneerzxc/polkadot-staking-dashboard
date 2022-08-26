// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BondedPoolsContextState, PoolAddresses } from '../types';

export const defaultBondedPoolsContext: BondedPoolsContextState = {
  // eslint-disable-next-line
  fetchPoolsMetaBatch: (k, v: [], r) => {},
  // eslint-disable-next-line
  createAccounts: (p) => poolAddresses,
  // eslint-disable-next-line
  getBondedPool: (p) => null,
  // eslint-disable-next-line
  getPoolNominationStatus: (n, o) => {},
  // eslint-disable-next-line
  getPoolNominationStatusCode: (t) => '',
  bondedPools: [],
  meta: {},
};

export const poolAddresses: PoolAddresses = {
  stash: '',
  reward: '',
};
