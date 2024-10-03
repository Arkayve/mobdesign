export function carouselNavigation() {
    const categoriesContainer = document.getElementById('categories__container');
    
    // Largeur d'une catégorie (tu peux ajuster cela)
    const categoryWidth = categoriesContainer.querySelector('.category__container').offsetWidth; // Largeur + marge
    
    document.getElementById('categories__next').addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: categoryWidth * 2, behavior: 'smooth' });
    });
    
    document.getElementById('categories__prev').addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: -categoryWidth * 2, behavior: 'smooth' });
    });
}