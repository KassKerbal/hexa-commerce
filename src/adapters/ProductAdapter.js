import GetProducts from '../application/GetProducts';
import GetProductById from '../application/GetProductById';
import ProductApiRepository from '../infrastructure/ProductApiRepository';

export default class ProductAdapter {
  constructor() {
    this.productRepository = new ProductApiRepository();
    this.getProducts = new GetProducts(this.productRepository);
    this.getProductById = new GetProductById(this.productRepository);
  }

  async getProductsList() {
    return this.getProducts.execute();
  }

  async getProductDetails(id) {
    return this.getProductById.execute(id);
  }
}