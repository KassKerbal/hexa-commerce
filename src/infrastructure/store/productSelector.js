import { createSelector } from '@reduxjs/toolkit';

export const selectAllProducts = (state) => state.products.data;
export const selectFilters = (state) => state.filters;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectFilters],
  (products, filters) => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesPrice = (
        (filters.minPrice === null || product.price >= filters.minPrice) &&
        (filters.maxPrice === null || product.price <= filters.maxPrice)
      );
      const matchesRating = filters.rating.includes(Math.trunc(product.rating) + 1);

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }
);