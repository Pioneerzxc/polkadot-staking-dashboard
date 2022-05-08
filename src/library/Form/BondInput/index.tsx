// Copyright 2022 @rossbulat/polkadot-staking-experience authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState } from 'react';
import { InputWrapper, RowWrapper } from './Wrapper';
import { useApi } from '../../../contexts/Api';
import { useConnect } from '../../../contexts/Connect';
import { useBalances } from '../../../contexts/Balances';
import { isNumeric, planckToDot } from '../../../Utils';
import { Button } from '../../Button';

export const BondInput = (props: any) => {

  // functional props
  const setters = props.setters ?? [];

  // input props
  const { disabled } = props;

  // whether to bond or unbond
  const task = props.task ?? 'bond';

  // whether a value has been provided already
  const _value = props.value ?? null;

  const { network }: any = useApi();
  const { activeAccount } = useConnect();
  const { getAccountBalance, getBondedAccount, getAccountLedger }: any = useBalances();
  const controller = getBondedAccount(activeAccount);
  const ledger = getAccountLedger(controller);

  const { active } = ledger;
  const balance = getAccountBalance(activeAccount);
  let { freeAfterReserve } = balance;

  let freeToBond: any = freeAfterReserve - planckToDot(active);
  freeToBond = freeToBond < 0 ? 0 : freeToBond;

  // default value will either be available to bond, or total bonded
  let _bond = _value !== null ? _value : task === 'bond' ? freeToBond : planckToDot(active);

  const [bond, setBond] = useState(_bond);

  // handle change for bonding
  const handleChangeBond = (e: any) => {
    let { value } = e.target;
    if (!isNumeric(value) && value !== '') {
      return;
    }
    setBond(value);
    updateParentState(value);
  }

  // handle change for unbonding
  const handleChangeUnbond = (e: any) => {
    let { value } = e.target;
    if (!isNumeric(value) && value !== '') {
      return;
    }
    setBond(value);
    updateParentState(value);
  }

  // apply bond to parent setters
  const updateParentState = (value: any) => {
    if (value !== '') {
      for (let s of setters) {
        s.set({
          ...s.current,
          bond: value
        });
      }
    }
  }

  return (
    <RowWrapper>
      <div>
        <InputWrapper>
          <section style={{ opacity: disabled ? 0.5 : 1 }}>
            <h3>{task === 'unbond' ? 'Unbond' : 'Bond'} {network.unit}:</h3>
            <input
              type="text"
              placeholder={`0 ${network.unit}`}
              value={bond}
              onChange={(e) => {
                if (task === 'bond') {
                  handleChangeBond(e);
                } else {
                  handleChangeUnbond(e);
                }
              }}
              disabled={disabled}
            />
          </section>
        </InputWrapper>
      </div>
      <div>
        <div>
          <Button inline small title="Max" onClick={() => {
            const value = task === 'bond' ? freeToBond : bond;
            setBond(value);
            updateParentState(value);
          }}
          />
        </div>
      </div>
    </RowWrapper>
  )
}

export default BondInput;