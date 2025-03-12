import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../infrastructure/store/productSelector';
import { loadProducts } from '../../infrastructure/store/productThunks';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const { loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Ecommerce</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;