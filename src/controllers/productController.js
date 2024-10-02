import { renderCategory } from "/src/view/categoryView"
import { renderProducts } from "/src/view/productView";
import { getProductsFromStorageOrServer } from "/src/models/productModel"

// Main display management
export async function fetchAllProducts() {
    const products = await getProductsFromStorageOrServer();
    renderCategory(products)
    renderProducts(products, true)
}
