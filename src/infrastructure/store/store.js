import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer
  }
});