export function manageBurger() {
    const header__burger = document.getElementById('header__burger');
    const header__menu = document.getElementById('header__menu');
    const headerLinks = document.querySelectorAll('#header__menu a');

    // Add or remove the 'open' class on burger button click
    header__burger.addEventListener('click', () => {
        header__burger.classList.toggle('open');  // Burger to cross animation
        header__menu.classList.toggle('open');    // Show/hide the menu
    });

    // Close the menu and reset burger icon when clicking on a link
    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            header__burger.classList.remove('open');  // Reset the burger icon
            header__menu.classList.remove('open');    // Close the menu
        });
    });

    // Close the menu when clicking outside of the menu
    document.addEventListener('click', (event) => {
        if (!header__menu.contains(event.target) && !header__burger.contains(event.target)) {
            header__burger.classList.remove('open');  // Reset the burger icon
            header__menu.classList.remove('open');    // Close the menu
        }
    });
}
