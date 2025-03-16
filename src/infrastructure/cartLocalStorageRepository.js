import Cart from '../core/Cart';

export default class CartLocalStorageRepository {
  constructor() {
    this.STORAGE_KEY = 'cart';
  }

  async saveCart(cart) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
      items: cart.items,
      total: cart.total
    }));
  }

  async getCart() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? new Cart(JSON.parse(data)) : new Cart();
  }
}