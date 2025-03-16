import { useSelector } from 'react-redux';
import { selectTotalItems } from '../../infrastructure/store/cartSelectors';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
  // const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();

  return (
    <button
      className="cursor-pointer relative flex items-center gap-2"
      onClick={() => navigate('/cart')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7m0 0V3m0 4h4m-4 0h-4"
          fill="none"
          style={{ transform: 'translate(0px, -2px)' }}
        />
      </svg>
      <span className="absolute bottom-3 left-4 h-4 flex items-center justify-center text-xs bg-red-500 text-white rounded-[50%] px-1">
        {/* {totalItems} */} 1
      </span>
    </button>
  );
};

export default CartWidget;