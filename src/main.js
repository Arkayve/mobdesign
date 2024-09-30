import './assets/css/reset.css'
import './assets/css/style.css'
import { loadProducts } from './controllers/productController.js';

document.querySelector('#app').innerHTML = `
    <button class="button">Bouton test.</button>
    <p class="link">lien test</p>
    <div class="arrow-right-container">
        <svg class="arrow-right" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.45805 28.4819C1.08852 28.8785 0.887354 29.403 0.896916 29.945C0.906478 30.4869 1.12603 31.004 1.50931 31.3873C1.89259 31.7706 2.40967 31.9901 2.95163 31.9997C3.49359 32.0092 4.0181 31.8081 4.41466 31.4385L18.361 17.4923C18.5553 17.298 18.7096 17.0673 18.8148 16.8134C18.92 16.5595 18.9741 16.2874 18.9741 16.0125C18.9741 15.7377 18.92 15.4656 18.8148 15.2117C18.7096 14.9578 18.5553 14.7271 18.361 14.5328L4.41466 0.586558C4.01994 0.205675 3.4914 -0.00493536 2.9429 8.78335e-05C2.3944 0.00511103 1.86982 0.225366 1.48214 0.613414C1.09445 1.00146 0.874694 1.52625 0.870188 2.07476C0.865682 2.62326 1.07679 3.1516 1.45805 3.54596L13.926 16.0139L1.45805 28.4819Z" fill="currentColor"/>
        </svg>
    </div>
    <p class="pagination">1</p>
    <p class="banner justify-center">Bannière de titre</p>
    <p class="banner">Bannière de titre</p>
    <input class="field" placeholder="Chercher...">
`

// document.addEventListener('DOMContentLoaded', () => {
//   loadProducts();
// });
