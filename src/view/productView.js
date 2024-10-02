// Display of products
export function renderProducts(products, isRecent) {

    // Sort the products by dateAdded (from most recent to oldest)
    let sortedProducts = products.sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded)
    })
    
    // Select the 4 most recent products
    if (isRecent) {
        sortedProducts = sortedProducts.slice(0, 4)
    }

    // Dinamize product template
    sortedProducts.forEach(product => {
        const productTemplate = document.getElementById('productTemplate')
        const productContainer = document.importNode(productTemplate.content, true)
        productContainer.querySelector('.js-product__img').src = '/src/assets/' + product.imageUrl
        productContainer.querySelector('.js-product__img').alt = 'image ' + product.title
        productContainer.querySelector('.js-product__title').textContent = product.title
        productContainer.querySelector('.js-product__price').textContent = product.price.toString().replace(".", "€")
        productContainer.querySelector('.js-product__category').textContent = product.category
        productContainer.querySelector('.js-product__description').textContent = product.description
        productContainer.querySelector('.js-product__button').textContent = 'Découvrir'
        document.getElementById('main').appendChild(productContainer)
    })  
}

