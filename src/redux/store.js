// @TODO create store here
import { balances } from './balances/reducer.js';
import { deposit, purge, withdraw } from './balances/actions.js';

function createStore(reducer) {
  /**
   * Store memiliki 4 hal
   * 1. State (done)
   * 2. Mendapatkan state (done)
   * 3. Men-subscribe perubahan state (done)
   * 4. Memperbarui state (done)
   */

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((listenerItem) => listenerItem !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  //  the store
  return {
    getState,
    subscribe,
    dispatch,
  };
}

(() => {
  const store = createStore(balances);

  store.subscribe(() => {
    const value = store.getState();
    console.log('balances:', value);
  });

  store.dispatch(deposit(10));
  store.dispatch(withdraw(5));
  store.dispatch(purge());
})();
