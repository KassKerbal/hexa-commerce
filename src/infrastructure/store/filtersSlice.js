import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  minPrice: null,
  maxPrice: null,
  rating: [],
  category: 'all',
  availableOnly: false
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    toggleAvailable: (state) => {
      state.availableOnly = !state.availableOnly;
    },
    resetFilters: () => initialState
  }
});

export const { 
  setSearchQuery, 
  setPriceRange,
  setRating,
  setCategory, 
  toggleAvailable, 
  resetFilters 
} = filtersSlice.actions;

export default filtersSlice.reducer;