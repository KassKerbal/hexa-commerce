export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartVersion = (state) => state.cart.version;
export const selectTotalItems = (state) => 
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);