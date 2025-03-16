import { createSlice } from '@reduxjs/toolkit';
import Cart from '../../../core/Cart';

const initialState = {
  items: [],
  total: 0,
  version: 0 // Para forzar rerenders
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, { payload }) => {
      state.items = payload.items;
      state.total = payload.total;
      state.version += 1;
    }
  }
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;