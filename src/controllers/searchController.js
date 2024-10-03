import { getProductsFromStorageOrServer } from "/src/models/productModel"
import { renderProducts } from "/src/view/productView"
import { emptyBloc } from "/src/assets/js/_utils"
import { updateBanner } from "/src/assets/js/components/_banner"

// Display management based on a category
export async function fetchProductsWithSearch(search) {
    let products = await getProductsFromStorageOrServer()
    if (search) {
        // Convert the search query to lowercase to make the search case-insensitive
        const lowerCaseSearch = search.toLowerCase()
        
        // Filter the products based on the search query
        products = products.filter(product => {
            // Check if the search query is found in the product name, description, or colors
            const nameMatch = product.title.toLowerCase().includes(lowerCaseSearch)
            const descriptionMatch = product.description.toLowerCase().includes(lowerCaseSearch)
            
            // Check if any color matches the search query ('colors' is an array)
            const colorMatch = product.colors.some(color => color.toLowerCase().includes(lowerCaseSearch))
            
            // Return true if any of the fields match
            return nameMatch || descriptionMatch || colorMatch
        })
    }

    emptyBloc('main')
    emptyBloc('categories__section')
    document.getElementById('header__menu').classList.remove('open')

    updateBanner('Votre recherche')
    renderProducts(products, false, true, search)
}
