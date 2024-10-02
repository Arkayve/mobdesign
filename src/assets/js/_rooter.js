import { fetchAllProducts } from '/src/controllers/productController'
import { fetchProductsByCategory } from '/src/controllers/categoryController'
import { renderCgv } from '/src/view/cgvView'
import { emptyBloc, scrollToTop } from '/src/assets/js/_utils'

// Function to display content based on the hash
export function navigate() {
    const hash = window.location.hash // Get the current hash (e.g., #home, #products)
  
    // Select the element where you want to display the content
    const main = document.getElementById('main')
    emptyBloc('main')
    emptyBloc('categories__section')
    document.getElementById('header__menu').classList.remove('open')
    switch(hash) {
        case '#qui-sommes-nous':
            document.getElementById('banner').innerHTML = `Qui sommes-nous`
            renderCgv()
            scrollToTop()
            break
        case '#mentions-legales':
            document.getElementById('banner').innerHTML = `Mentions légales`
            renderCgv()
            scrollToTop()
            break
        case '#cgv':
            document.getElementById('banner').innerHTML = `Conditions générales de vente`
            renderCgv()
            scrollToTop()
            break
        case '#canapes':
            document.getElementById('banner').innerHTML = `Canapés`
            main.innerHTML = '<h1 style="text-align:center">CONTENU PRINCIPAL</h1>'
            scrollToTop()
            break
        case '#mes-coups-de-coeur':
            document.getElementById('banner').innerHTML = `Mes coups de coeur`
            main.innerHTML = '<h1 style="text-align:center">CONTENU PRINCIPAL</h1>'
            scrollToTop()
            break
        case '#canapes-et-fauteuils':
            document.getElementById('banner').innerHTML = `Canapés et fauteuils`
            document.getElementById('banner').classList.add('narrow')
            fetchProductsByCategory('canapés et fauteuils')
            scrollToTop()
            break
        case '#chaises':
            document.getElementById('banner').innerHTML = `Chaises`
            document.getElementById('banner').classList.add('narrow')
            fetchProductsByCategory('chaises')
            scrollToTop()
            break
        case '#rangement':
            document.getElementById('banner').innerHTML = `Rangement`
            document.getElementById('banner').classList.add('narrow')
            fetchProductsByCategory('rangement')
            scrollToTop()
            break
        case '#luminaire':
            document.getElementById('banner').innerHTML = `Luminaire`
            document.getElementById('banner').classList.add('narrow')
            fetchProductsByCategory('luminaire')
            scrollToTop()
            break
        case '#decoration':
            document.getElementById('banner').innerHTML = `Décoration`
            document.getElementById('banner').classList.add('narrow')
            fetchProductsByCategory('décoration')
            scrollToTop()
            break
        default:
            document.getElementById('banner').innerHTML = `Nos dernières nouveautés`
            document.getElementById('banner').classList.remove('narrow')
            fetchAllProducts()
            scrollToTop()
            break
    }
}