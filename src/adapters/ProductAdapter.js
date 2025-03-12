import GetProducts from '../application/GetProducts';
import GetProductById from '../application/GetProductById';
import ProductApiRepository from '../infrastructure/productApiRepository';

export default class ProductAdapter {
  constructor() {
    this.repository  = new ProductApiRepository();
    this.getProducts = new GetProducts(this.repository);
    this.getProductById = new GetProductById(this.repository);
  }

  async getProductsList() {
    return this.getProducts.execute();
  }

  async getProductDetails(id) {
    return this.getProductById.execute(id);
  }
}