// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useModal } from 'contexts/Modal';
import { ValidatorList } from 'library/ValidatorList';
import { PaddingWrapper } from '../Wrappers';
import { ListWrapper } from './Wrappers';

export const PoolNominations = () => {
  const { config } = useModal();
  const { nominator, targets } = config;
  const batchKey = 'pool_nominations';

  return (
    <PaddingWrapper>
      <h2>Pool Nominations</h2>

      <ListWrapper>
        {targets.length > 0 ? (
          <ValidatorList
            bondType="pool"
            validators={targets}
            nominator={nominator}
            format="nomination"
            batchKey={batchKey}
            title="Pool Nominations"
            showMenu={false}
            inModal
          />
        ) : (
          <h3>Pool is Not Nominating.</h3>
        )}
      </ListWrapper>
    </PaddingWrapper>
  );
};

export default PoolNominations;
