export default class ProductRepositoryPort {
    getProducts() {
      throw new Error("Método abstracto: implementar en infraestructura");
    }
    
    getProductById(id) {
      throw new Error("Método abstracto: implementar en infraestructura");
    }
  }