import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../infrastructure/store/cartSelectors';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>
      
      <div className="space-y-6">
        {items.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-2xl">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;