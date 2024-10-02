// Make top-banner transparent
export function makeBannerTransparent() {
    window.addEventListener('scroll', function() {
        const myElement = document.getElementById('header__top')
      
        if (window.scrollY > 1) {
            myElement.classList.add('scrolled')
        } else {
            myElement.classList.remove('scrolled')
        }
    })
}