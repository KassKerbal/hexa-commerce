export default class GetProductById {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async execute(id) {
      return this.productRepository.getItem(id);
    }
  }