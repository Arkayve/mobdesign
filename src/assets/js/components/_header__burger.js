export function manageBurger() {
    const header__burger = document.getElementById('header__burger');
    const header__menu = document.getElementById('header__menu');

    // Ajouter ou retirer la classe "open" sur le clic du bouton burger
    header__burger.addEventListener('click', () => {
        header__burger.classList.toggle('open');  // Animation du burger en croix
        header__menu.classList.toggle('open');    // Afficher/masquer le menu
    });
}
