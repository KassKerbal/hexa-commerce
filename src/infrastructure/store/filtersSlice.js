import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  minPrice: null,
  maxPrice: null,
  rating: [],
  category: 'all'
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPriceRange: (state, action) => {
      console.log(state, action)
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    resetFilters: () => initialState
  }
});

export const { 
  setSearchQuery, 
  setPriceRange,
  setRating,
  setCategory, 
  resetFilters 
} = filtersSlice.actions;

export default filtersSlice.reducer;