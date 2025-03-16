import { useDispatch } from 'react-redux';
import { addToCart } from '../../infrastructure/store/cartThunks'; // <-- Solo thunks como punto de contacto

export const useCart = () => {
  const dispatch = useDispatch();

  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};