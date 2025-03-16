import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../infrastructure/store/cartThunks';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img 
        src={item.product.image} 
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.product.title}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Total: ${(item.product.price * item.quantity).toFixed(2)}</p>
      </div>
      <button 
        onClick={() => dispatch(removeFromCart(item.product.id))}
        className="text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;