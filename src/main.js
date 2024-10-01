import './assets/scss/style.scss'
import './assets/scss/reset.scss'
import { loadProducts } from './controllers/productController.js';
import { manageBurger } from './assets/js/components/_header__burger.js';

document.getElementById('banner').innerHTML = `
    Nos dernières nouveautés
`

document.addEventListener('DOMContentLoaded', () => {
   loadProducts();
});

manageBurger();
