import '/src/assets/scss/style.scss'
import { manageBurger } from '/src/assets/js/components/_header__burger'
import { makeBannerTransparent } from '/src/assets/js/components/_banner'
import { navigate } from '/src/assets/js/_rooter'
import { fetchProductsWithSearch } from '/src/controllers/searchController'
  
// Manage display at first load
window.addEventListener('load', navigate)

// Initialize navigation by rooter
window.addEventListener('hashchange', navigate)

// Manage burger menu
manageBurger()

// Make banner's background transparent on scroll
makeBannerTransparent()

// Capture the search submission event
document.getElementById('search__container').addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get the search query from the input field
    const searchQuery = document.getElementById('search__field').value;

    // Clear the search field
    document.getElementById('search__field').value = '';

    // Send search to controller
    fetchProductsWithSearch(searchQuery)
});
