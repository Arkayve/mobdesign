import './assets/scss/style.scss'
import './assets/scss/reset.scss'
import { loadProducts } from './controllers/productController.js';
import { manageBurger } from './assets/js/components/_header__burger.js';
import { renderCgv } from './view/cgvView.js';

// Fonction pour afficher le contenu en fonction du hash
function navigate() {
    const hash = window.location.hash; // Obtenir le hash actuel (par ex. #home, #products)
  
    // Sélectionne l'élément dans lequel tu veux afficher le contenu
    const main = document.getElementById('main');
    
    switch(hash) {
      case '#qui-sommes-nous':
        document.getElementById('banner').innerHTML = `Qui sommes-nous`
        renderCgv();
        break;
      case '#mentions-legales':
        document.getElementById('banner').innerHTML = `Mentions légales`
        renderCgv();
        break;
      case '#cgv':
        document.getElementById('banner').innerHTML = `Conditions générales de vente`
        renderCgv();
        break;
      case '#canapes':
        document.getElementById('banner').innerHTML = `Canapés`
        main.innerHTML = '<h1 style="text-align:center;">CONTENU PRINCIPAL</h1>';
        break;
      case '#decoration':
        document.getElementById('banner').innerHTML = `Décoration`
        main.innerHTML = '<h1 style="text-align:center;">CONTENU PRINCIPAL</h1>';
        break;
      case '#mes-coups-de-coeur':
        document.getElementById('banner').innerHTML = `Mes coups de coeur`
        main.innerHTML = '<h1 style="text-align:center;">CONTENU PRINCIPAL</h1>';
        break;
      default:
        document.getElementById('banner').innerHTML = `Nos dernières nouveautés`
        loadProducts();
        break;
    }
  }
  
  // Initialiser la navigation
  window.addEventListener('hashchange', navigate);
  window.addEventListener('load', navigate); // Gérer l'affichage au chargement

// Gestion du menu burger
manageBurger();
