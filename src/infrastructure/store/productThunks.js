import ProductAdapter from '../../adapters/ProductAdapter';
import { productsReceived, productsRequested, productsRequestFailed } from './productsSlice';

export const loadProducts = () => async (dispatch, getState) => {
  try {

    if (getState().products.data.length > 0) return;
    
    dispatch(productsRequested());
    
    const adapter = new ProductAdapter();
    const products = await adapter.getProductsList();
    console.log(products)
    const reduxPlainProducts = products.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      rating: product.rating.rate,
      category: product.category,
      image: product.image,
      description: product.description
    }));
    
    dispatch(productsReceived(reduxPlainProducts));
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};