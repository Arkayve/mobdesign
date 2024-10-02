import '/src/assets/scss/reset.scss'
import '/src/assets/scss/style.scss'
import { manageBurger } from '/src/assets/js/components/_header__burger'
import { makeBannerTransparent } from '/src/assets/js/components/_banner'
import { navigate } from '/src/assets/js/_rooter'
  
// Manage display at first load
window.addEventListener('load', navigate)

// Initialize navigation by rooter
window.addEventListener('hashchange', navigate)

// Manage burger menu
manageBurger()

// Make banner's background transparent on scroll
makeBannerTransparent()
