import { getProductsFromStorageOrServer } from "/src/models/productModel"
import { renderProducts } from "/src/view/productView"

// Display management based on a category
export async function fetchProductsByCategory(category) {
    let products = await getProductsFromStorageOrServer()
    if (category) {
        products = products.filter(product => product.category === category)
    }
    // We list all products of the category, so boolean is false
    renderProducts(products, false)
}
