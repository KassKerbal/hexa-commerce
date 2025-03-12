import ProductRepositoryPort from '../application/ProductRepositoryPort';
import Product from '../core/Product';

export default class ProductApiRepository extends ProductRepositoryPort {

  async getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data.map(productData => new Product(productData))
  }

  async getProductById(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return new Product(data);
  }
}