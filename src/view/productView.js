export function renderProducts(products) {
    const productList = document.getElementById('main');
    products.forEach(product => {
        const productTemplate = document.getElementById('productTemplate')
        const productContainer = document.importNode(productTemplate.content, true)
        productContainer.querySelector('.js-product__img').src = product.imageUrl
        productContainer.querySelector('.js-product__title').textContent = product.title
        productContainer.querySelector('.js-product__price').textContent = product.price.toString().replace(".", "€")
        productContainer.querySelector('.js-product__category').textContent = product.category
        productContainer.querySelector('.js-product__description').textContent = product.description
        productContainer.querySelector('.js-product__button').textContent = 'Découvrir'
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').appendChild(productContainer)
    });  
}