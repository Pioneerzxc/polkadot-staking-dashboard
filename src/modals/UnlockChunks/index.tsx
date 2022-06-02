// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { useBalances } from 'contexts/Balances';
import { useConnect } from 'contexts/Connect';
import { useModal } from 'contexts/Modal';
import { usePools } from 'contexts/Pools';
import { ConnectContextInterface } from 'types/connect';
import { HeadingWrapper } from '../Wrappers';
import { Wrapper, FixedContentWrapper, SectionsWrapper } from './Wrappers';
import { Overview } from './Overview';
import { Forms } from './Forms';

export const UnlockChunks = () => {
  const { activeAccount } = useConnect() as ConnectContextInterface;
  const { config, setModalHeight } = useModal();
  const { target } = config || {};
  const { getAccountLedger }: any = useBalances();
  const { getPoolUnlocking } = usePools();

  // get the unlocking per target
  const _getUnlocking = () => {
    let unlocking = [];
    let ledger;
    switch (target) {
      case 'stake':
        ledger = getAccountLedger(activeAccount);
        unlocking = ledger.unlocking;
        break;
      case 'pool':
        unlocking = getPoolUnlocking();
        break;
      default:
        console.error(`unlocking modal target ${target} is not defined.`);
    }
    return unlocking;
  };

  const unlocking = _getUnlocking();

  // active modal section
  const [section, setSection] = useState(0);

  // modal task
  const [task, setTask]: any = useState(null);

  // unlock value of interest
  const [unlock, setUnlock] = useState(null);

  // refs for wrappers
  const headerRef: any = useRef(null);
  const overviewRef: any = useRef(null);
  const formsRef: any = useRef(null);

  // resize modal on state change
  useEffect(() => {
    let _height = headerRef.current?.clientHeight ?? 0;

    if (section === 0) {
      _height += overviewRef.current?.clientHeight ?? 0;
    } else {
      _height += formsRef.current?.clientHeight ?? 0;
    }
    setModalHeight(_height);
  }, [task, section]);

  return (
    <Wrapper>
      <FixedContentWrapper ref={headerRef}>
        <HeadingWrapper>
          <FontAwesomeIcon transform="grow-2" icon={faLockOpen} />
          {unlocking.length > 0 && `${unlocking.length} `}Unlock
          {unlocking.length === 1 ? '' : 's'}
        </HeadingWrapper>
      </FixedContentWrapper>
      <SectionsWrapper
        animate={section === 0 ? 'home' : 'next'}
        transition={{
          duration: 0.5,
          type: 'spring',
          bounce: 0.1,
        }}
        variants={{
          home: {
            left: 0,
          },
          next: {
            left: '-100%',
          },
        }}
      >
        <Overview
          unlocking={unlocking}
          target={target}
          setSection={setSection}
          setUnlock={setUnlock}
          setTask={setTask}
          ref={overviewRef}
        />
        <Forms
          setSection={setSection}
          unlock={unlock}
          task={task}
          ref={formsRef}
        />
      </SectionsWrapper>
    </Wrapper>
  );
};