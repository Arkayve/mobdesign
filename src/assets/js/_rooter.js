import { fetchAllProducts } from '/src/controllers/productController'
import { fetchProductsByCategory } from '/src/controllers/categoryController'
import { renderCgv } from '/src/view/cgvView'
import { emptyBloc, scrollToTop } from '/src/assets/js/_utils'
import { updateBanner } from '/src/assets/js/components/_banner'

// Function to display content based on the hash
export function navigate() {
    const hash = window.location.hash // Get the current hash (e.g., #home, #products)
  
    // Select the element where you want to display the content
    const main = document.getElementById('main')
    emptyBloc('main')
    emptyBloc('categories__section')
    document.getElementById('header__menu').classList.remove('open')
    handleRoute(window.location.hash)
}

// Mapping actions based on the hash
const routes = {
  '#qui-sommes-nous': () => {
      updateBanner('Qui sommes-nous')
      renderCgv()
  },
  '#mentions-legales': () => {
      updateBanner('Mentions légales')
      renderCgv()
  },
  '#cgv': () => {
      updateBanner('Conditions générales de vente')
      renderCgv()
  },
  '#canapes': () => {
      updateBanner('Canapés')
  },
  '#mes-coups-de-coeur': () => {
      updateBanner('Mes coups de coeur')
  },
  '#canapes-et-fauteuils': () => {
      updateBanner('Canapés et fauteuils', true)
      fetchProductsByCategory('canapés et fauteuils')
  },
  '#chaises': () => {
      updateBanner('Chaises', true)
      fetchProductsByCategory('chaises')
  },
  '#rangement': () => {
      updateBanner('Rangement', true)
      fetchProductsByCategory('rangement')
  },
  '#luminaire': () => {
      updateBanner('Luminaire', true)
      fetchProductsByCategory('luminaire')
  },
  '#decoration': () => {
      updateBanner('Décoration', true)
      fetchProductsByCategory('décoration')
  },
  'default': () => {
      updateBanner('Nos dernières nouveautés')
      fetchAllProducts()
  }
}

// Function to handle routing
function handleRoute(hash) {
    const action = routes[hash] || routes['default']
    action()
    scrollToTop() // Called only once after the action
}

