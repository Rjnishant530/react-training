

export default class ProductModel {
    productId = 0;
    productName = '';
    unitPrice = 0;
    unitsInStock = 0;

    constructor(id, name, price, stock) {
        this.productId = id;
        this.productName = name;
        this.unitPrice = price;
        this.unitsInStock = stock;
    }
    toString() {
        return `${this.productId},${this.productName}...`;
    }
}


