import React from 'react';
import useInput from '../hooks/useInput';
import DecimalDisplay from '../components/DecimalDisplay';
import DecimalInput from '../components/DecimalInput';
import Button from '../components/Button';

function SavingsPage() {
  const [inputValue, onInputValueChange] = useInput(0);
  const savings = 0; // @TODO get savings state from store

  const dispatch = () => {}; // @TODO get dispatch function from store

  const onDeposit = () => {
    // @TODO dispatch deposit
    dispatch();
  };

  return (
    <div className="balances-page">
      <h1>Your Savings</h1>
      <DecimalDisplay value={savings} />
      <DecimalInput value={inputValue} valueChange={onInputValueChange} />

      <div className="actions">
        <Button text="Deposit" action={onDeposit} />
      </div>
    </div>
  );
}

export default SavingsPage;
