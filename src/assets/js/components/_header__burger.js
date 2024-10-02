export function manageBurger() {
    const header__burger = document.getElementById('header__burger')
    const header__menu = document.getElementById('header__menu')

    // Add or remove the 'open' class on burger button click
    header__burger.addEventListener('click', () => {
        header__burger.classList.toggle('open')  // Burger to cross animation
        header__menu.classList.toggle('open')    // Show/hide the menu
    })
}
