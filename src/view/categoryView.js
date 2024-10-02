export function renderCategory(products) {

    // Utiliser un Set pour extraire les catégories uniques
    const categories = new Set(products.map(product => product.category));

    // Convertir le Set en tableau si nécessaire
    const uniqueCategories = Array.from(categories);

    uniqueCategories.forEach(category => {
        const categoryTemplate = document.getElementById('categoryTemplate')
        const categoryContainer = document.importNode(categoryTemplate.content, true)
        categoryContainer.querySelector('.js-category__img').src = '/src/assets/images/' + category + '.png';
        categoryContainer.querySelector('.js-category__title').textContent = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        document.getElementById('categories__container').appendChild(categoryContainer)
    }); 
}