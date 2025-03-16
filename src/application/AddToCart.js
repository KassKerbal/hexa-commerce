export default class AddToCart {
    constructor({ cartRepository }) {
      this.cartRepository = cartRepository;
    }
  
    async execute(product, quantity) {
      const cart = await this.cartRepository.getCart();
      cart.addItem(product, quantity);
      await this.cartRepository.saveCart(cart);
      return cart;
    }
  }