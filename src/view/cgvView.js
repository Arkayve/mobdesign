export function renderCgv() {
    const cgvTemplate = document.getElementById('cgvTemplate')
    const cgvContainer = document.importNode(cgvTemplate.content, true)
    cgvContainer.querySelector('.js-cgv__title1').textContent = 'Lorem ipsum dolor sit amet'
    cgvContainer.querySelector('.js-cgv__description1').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.'
    cgvContainer.querySelector('.js-cgv__title2').textContent = 'Lorem ipsum dolor sit amet'
    cgvContainer.querySelector('.js-cgv__description2').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.'
    cgvContainer.querySelector('.js-cgv__description3').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.'
    cgvContainer.querySelector('.js-banner').textContent = "D'autres moins"
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').appendChild(cgvContainer)
}