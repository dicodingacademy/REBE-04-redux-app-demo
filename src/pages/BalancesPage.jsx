import React, { useEffect } from 'react';
import Button from '../components/Button';
import DecimalDisplay from '../components/DecimalDisplay';
import DecimalInput from '../components/DecimalInput';
import useInput from '../hooks/useInput';

function BalancesPage() {
  const [inputValue, onInputValueChange] = useInput(0);
  const balances = 0; // @TODO get balances state from store

  const dispatch = () => {}; // @TODO get dispatch function from store

  useEffect(() => {
    dispatch(); // @TODO dispatch initial data
  }, []);

  const onDeposit = () => {
    dispatch(); // @TODO dispatch deposit
  };

  const onWithdraw = () => {
    dispatch(); // @TODO dispatch withdraw
  };

  const onPurge = () => {
    dispatch(); // @TODO dispatch purge
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
