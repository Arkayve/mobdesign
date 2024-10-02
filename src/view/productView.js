export function renderProducts(products) {

    // Trier les produits par dateAdded (du plus récent au plus ancien)
    const sortedProducts = products.sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    });
    
    // Sélectionner les 4 produits les plus récents
    const recentProducts = sortedProducts.slice(0, 4);

    recentProducts.forEach(product => {
        const productTemplate = document.getElementById('productTemplate')
        const productContainer = document.importNode(productTemplate.content, true)
        productContainer.querySelector('.js-product__img').src = '/src/assets/' + product.imageUrl
        productContainer.querySelector('.js-product__title').textContent = product.title
        productContainer.querySelector('.js-product__price').textContent = product.price.toString().replace(".", "€")
        productContainer.querySelector('.js-product__category').textContent = product.category
        productContainer.querySelector('.js-product__description').textContent = product.description
        productContainer.querySelector('.js-product__button').textContent = 'Découvrir'
        document.getElementById('main').appendChild(productContainer)
    });  
}

