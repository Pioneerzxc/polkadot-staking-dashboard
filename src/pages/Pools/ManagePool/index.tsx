// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useActivePool } from 'contexts/Pools/ActivePool';
import { useModal } from 'contexts/Modal';
import { PageRowWrapper } from 'Wrappers';
import { CardWrapper, CardHeaderWrapper } from 'library/Graphs/Wrappers';
import { OpenAssistantIcon } from 'library/OpenAssistantIcon';
import { Button } from 'library/Button';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Nominations from 'pages/Stake/Active/Nominations';
import { GenerateNominations } from 'pages/Stake/GenerateNominations';
import { useUi } from 'contexts/UI';
import { useConnect } from 'contexts/Connect';

export const ManagePool = () => {
  const { isSyncing } = useUi();
  const { openModalWith } = useModal();
  const { activeAccount } = useConnect();
  const {
    isNominator,
    setTargets,
    targets,
    poolNominations,
    activeBondedPool,
  } = useActivePool();

  const isNominating = !!poolNominations?.targets?.length;
  const nominator = activeBondedPool?.addresses?.stash ?? null;

  return (
    <PageRowWrapper className="page-padding" noVerticalSpacer>
      <CardWrapper>
        {isSyncing ? (
          <Nominations bondType="pool" nominator={activeAccount} />
        ) : isNominator() && !isNominating ? (
          <>
            <CardHeaderWrapper withAction>
              <h3>
                Generate Nominations
                <OpenAssistantIcon page="stake" title="Nominations" />
              </h3>
              <div>
                <Button
                  small
                  inline
                  primary
                  icon={faChevronCircleRight}
                  transform="grow-1"
                  title="Nominate"
                  disabled={!isNominator()}
                  onClick={() => openModalWith('NominatePool', {}, 'small')}
                />
              </div>
            </CardHeaderWrapper>
            <GenerateNominations
              batchKey="generate_pool_nominations"
              nominations={targets.nominations}
              setters={[
                {
                  set: setTargets,
                  current: targets,
                },
              ]}
            />
          </>
        ) : (
          <Nominations bondType="pool" nominator={nominator} />
        )}
      </CardWrapper>
    </PageRowWrapper>
  );
};

export default ManagePool;
