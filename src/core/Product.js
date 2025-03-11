export default class Product {
    constructor({ id, title, price, category, image, description }) {
        if (!id || !title || price === undefined) {
            throw new Error("Invalid product data");
        }
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category || "Unknown category";
        this.image = image || "No image";
        this.description = description || "No description";
    }

    applyDiscount(percentage) {
        this.price = this.price * (1 + percentage / 100);
      }

    calculateImportTax(taxRate) {
        return this.price * taxRate;
    }

}