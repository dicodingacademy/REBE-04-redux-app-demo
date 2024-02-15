import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import DecimalDisplay from '../components/DecimalDisplay';
import DecimalInput from '../components/DecimalInput';
import Button from '../components/Button';
import { deposit } from '../redux/savings/actions';

function SavingsPage() {
  const [inputValue, onInputValueChange] = useInput(0);
  const savings = useSelector((state) => state.savings);

  const dispatch = useDispatch();

  const onDeposit = () => {
    dispatch(deposit(inputValue));
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
