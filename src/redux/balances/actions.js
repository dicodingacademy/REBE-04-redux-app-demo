// @TODO create actions for savings state here
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

export { deposit, withdraw, purge };
