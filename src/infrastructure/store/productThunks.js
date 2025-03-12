import ProductAdapter from '../../adapters/ProductAdapter';
import { productsReceived, productsRequested, productsRequestFailed } from './productsSlice';

export const loadProducts = () => async (dispatch, getState) => {
  try {

    if (getState().products.data.length > 0) return;
    
    dispatch(productsRequested());
    
    const adapter = new ProductAdapter();
    const products = await adapter.getProductsList();
    
    dispatch(productsReceived(products));
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};