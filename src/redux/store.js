import { configureStore } from '@reduxjs/toolkit';
import { balances } from './balances/reducer';
import { savings } from './savings/reducers';

const store = configureStore({
  reducer: {
    balances,
    savings,
  },
});

export default store;
