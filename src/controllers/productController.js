import { renderCategory } from "/src/view/categoryView"
import { renderProducts } from "/src/view/productView"
import { getProductsFromStorageOrServer } from "/src/models/productModel"
import { carouselNavigation } from "/src/assets/js/components/_carousel"

// Main display management
export async function fetchAllProducts() {
    const products = await getProductsFromStorageOrServer()
    renderCategory(products)
    // Boolean precise if we want only fourth's more recents products. Home display need to be on true
    renderProducts(products, true)
    carouselNavigation()
}
