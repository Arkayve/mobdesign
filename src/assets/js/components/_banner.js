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

// Function to update the banner
export function updateBanner(title, narrow = false) {
    const banner = document.getElementById('banner');
    banner.innerHTML = title;
    
    // Handle the "narrow" class based on the boolean variable
    if (narrow) {
        banner.classList.add('narrow');
    } else {
        banner.classList.remove('narrow');
    }
}