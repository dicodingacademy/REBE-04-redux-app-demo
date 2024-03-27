import { balancesAPI } from '../../utils/api.js';

function deposit(value) {
  return {
    type: 'balances/deposit',
    payload: {
      value,
    },
  };
}

function withdraw(value) {
  return {
    type: 'balances/withdraw',
    payload: {
      value,
    },
  };
}

function purge() {
  return {
    type: 'balances/purge',
    payload: {},
  };
}

function initial(value) {
  return {
    type: 'balances/initial',
    payload: {
      value,
    },
  };
}

function asyncInitial() {
  return async (dispatch) => {
    const balances = await balancesAPI.getBalances();
    dispatch(initial(balances));
  };
}

function asyncDeposit(value) {
  return async (dispatch) => {
    try {
      dispatch(deposit(value));
      await balancesAPI.deposit(value);
    } catch {
      dispatch(withdraw(value));
    }
  };
}

function asyncWithdraw(value) {
  return async (dispatch) => {
    try {
      dispatch(withdraw(value));
      await balancesAPI.withdraw(value);
    } catch (error) {
      if (error.message === 'not enough balances') throw error;
      dispatch(deposit(value));
    }
  };
}

function asyncPurge(value) {
  return async (dispatch, getState) => {
    const { balances } = getState();

    try {
      dispatch(purge());
      await balancesAPI.purge(value);
    } catch (error) {
      dispatch(deposit(balances));
    }
  };
}

export {
  asyncDeposit, asyncWithdraw, asyncPurge, asyncInitial,
};
