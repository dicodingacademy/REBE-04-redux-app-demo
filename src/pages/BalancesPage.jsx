import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import DecimalDisplay from '../components/DecimalDisplay';
import DecimalInput from '../components/DecimalInput';
import useInput from '../hooks/useInput';
import {
  asyncDeposit, asyncInitial, asyncPurge, asyncWithdraw,
} from '../redux/balances/actions';

function BalancesPage() {
  const [inputValue, onInputValueChange] = useInput(0);
  const balances = useSelector((state) => state.balances);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncInitial());
  }, []);

  const onDeposit = () => {
    dispatch(asyncDeposit(inputValue));
  };

  const onWithdraw = () => {
    dispatch(asyncWithdraw(inputValue));
  };

  const onPurge = () => {
    dispatch(asyncPurge());
  };

  return (
    <div className="balances-page">
      <h1>Your Balances</h1>
      <DecimalDisplay value={balances} />
      <DecimalInput value={inputValue} valueChange={onInputValueChange} />

      <div className="actions">
        <Button text="Deposit" action={onDeposit} />
        <Button text="Withdraw" action={onWithdraw} />
        <Button text="Purge" action={onPurge} />
      </div>
    </div>
  );
}

export default BalancesPage;
