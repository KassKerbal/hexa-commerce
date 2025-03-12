import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: JSON.parse(localStorage.getItem('hexa-products')) || [],
    loading: false,
    error: null
  },
  reducers: {
    productsRequested: (state) => {
      state.loading = true;
    },
    productsReceived: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      localStorage.setItem('hexa-products', JSON.stringify(action.payload));
    },
    productsRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { productsReceived, productsRequested, productsRequestFailed } = productsSlice.actions;
export default productsSlice.reducer;