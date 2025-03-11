import Product from '../core/Product';

export default class ProductApiRepository {
    async getAll() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data.map(productData => new Product(productData))
    }
    async getItem(id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return new Product(data);
      }
  }