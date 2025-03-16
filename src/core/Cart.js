export default class Cart {
    constructor({ items = [], total = 0 }) {
      this.items = items;
      this.total = total;
    }
  
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
      
      this.total = this.calculateTotal();
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
      this.total = this.calculateTotal();
    }
  
    updateQuantity(productId, newQuantity) {
      const item = this.items.find(item => item.product.id === productId);
      if (item) {
        item.quantity = newQuantity;
        this.total = this.calculateTotal();
      }
    }
  
    calculateTotal() {
      return this.items.reduce((acc, item) => 
        acc + (item.product.price * item.quantity), 0
      );
    }
  
    clear() {
      this.items = [];
      this.total = 0;
    }
  }