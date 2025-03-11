import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductAdapter from '../../adapters/ProductAdapter';

const ProductDetail = () => {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const adapter = new ProductAdapter();
      const productDetails = await adapter.getProductDetails(id);
      setProduct(productDetails);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
    </div>
  );
}

export default ProductDetail;