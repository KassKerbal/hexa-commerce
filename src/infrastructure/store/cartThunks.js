import { AddToCart } from '../../../application/AddToCart';
import CartLocalStorageRepository from '../CartLocalStorageRepository';

const cartRepo = new CartLocalStorageRepository();

export const addToCart = (product, quantity) => async (dispatch) => {
  // Configuración de dependencias
  const cartRepo = new CartLocalStorageRepository(); // <-- Infraestructura inyectada
  const addToCartUseCase = new AddToCart({ cartRepository: cartRepo }); // <-- Caso de uso
  
  // Ejecución del flujo
  const updatedCart = await addToCartUseCase.execute(product, quantity);
  
  // Actualización del estado UI (que es infraestructura)
  dispatch(updateCart(updatedCart));
};