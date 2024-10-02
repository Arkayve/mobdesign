import './assets/scss/style.scss'
import './assets/scss/reset.scss'
import { loadProducts } from './controllers/productController.js';
import { manageBurger } from './assets/js/components/_header__burger.js';
import { renderCgv } from './view/cgvView.js';
import { makeBannerTransparent } from './assets/js/components/_banner.js';

// Fonction pour afficher le contenu en fonction du hash
function navigate() {
    const hash = window.location.hash; // Obtenir le hash actuel (par ex. #home, #products)
  
    // Sélectionne l'élément dans lequel tu veux afficher le contenu
    const main = document.getElementById('main');
    main.innerHTML = '';
    document.getElementById('header__menu').classList.remove('open');
    switch(hash) {
      case '#qui-sommes-nous':
        document.getElementById('banner').innerHTML = `Qui sommes-nous`
        renderCgv();
        scrollToTop();
        break;
      case '#mentions-legales':
        document.getElementById('banner').innerHTML = `Mentions légales`
        renderCgv();
        scrollToTop();
        break;
      case '#cgv':
        document.getElementById('banner').innerHTML = `Conditions générales de vente`
        renderCgv();
        scrollToTop();
        break;
      case '#canapes':
        document.getElementById('banner').innerHTML = `Canapés`
        main.innerHTML = '<h1 style="text-align:center;">CONTENU PRINCIPAL</h1>';
        scrollToTop();
        break;
      case '#decoration':
        document.getElementById('banner').innerHTML = `Décoration`
        main.innerHTML = '<h1 style="text-align:center;">CONTENU PRINCIPAL</h1>';
        scrollToTop();
        break;
      case '#mes-coups-de-coeur':
        document.getElementById('banner').innerHTML = `Mes coups de coeur`
        main.innerHTML = '<h1 style="text-align:center;">CONTENU PRINCIPAL</h1>';
        scrollToTop();
        break;
      default:
        document.getElementById('banner').innerHTML = `Nos dernières nouveautés`
        loadProducts();
        scrollToTop();
        break;
    }
  }
  
  // Initialiser la navigation
  window.addEventListener('hashchange', navigate);
  window.addEventListener('load', navigate); // Gérer l'affichage au chargement

// Gestion du menu burger
manageBurger();

// Rendre la bannière transparente au scroll
makeBannerTransparent();

function scrollToTop() {
    window.scrollTo({
        top: 0, // Position Y à atteindre (0 pour le haut de la page)
        behavior: 'smooth' // Défilement fluide
    });
}
