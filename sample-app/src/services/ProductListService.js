import ProductModel from "../models/ProductModel";

const arrayOfProducts = [
    new ProductModel(101, 'iPhone 6', 10000, 10),
    new ProductModel(102, 'iPhone 7', 12000, 10),
    new ProductModel(103, 'iPhone 7s', 14000, 10),
    new ProductModel(104, 'iPhone 8', 20000, 10),
    new ProductModel(105, 'iPhone Xr', 22000, 20),
    new ProductModel(106, 'iPhone X', 25000, 14),
    new ProductModel(107, 'iPhone SE', 30000, 60),
    new ProductModel(108, 'iPhone 11', 42000, 170),
    new ProductModel(109, 'iPhone 11 PRO', 70000, 105),
    new ProductModel(110, 'iPhone 12', 60000, 110),
    new ProductModel(111, 'iPhone 12 PRO', 100000, 180),

];

export function getAllProduct() {
    return arrayOfProducts;
}

export function getProductDetails(id) {

    var items = arrayOfProducts.filter(v => v.productId == id);
    if (items.length) {
        return items[0];
    } else {
        return null;
    }

}