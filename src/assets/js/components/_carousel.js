export function carouselNavigation() {
    const categoriesContainer = document.getElementById('categories__container')
    const prevButton = document.getElementById('categories__prev')
    const nextButton = document.getElementById('categories__next')

    // Width of a category (you can adjust this)
    const categoryWidth = categoriesContainer.querySelector('.category__container').offsetWidth // Width + margin

    // Variables to track swipe gestures
    let startX = 0;
    let endX = 0;

    // Function to initialize or disable the carousel based on screen size
    function initCarousel() {
        const isLargeScreen = window.innerWidth >= 1024;

        if (isLargeScreen) {
            // Disable the carousel for large screens
            categoriesContainer.style.overflow = 'visible';
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            categoriesContainer.removeEventListener('scroll', updateButtons);
        } else {
            // Enable the carousel for small screens
            categoriesContainer.style.overflow = 'hidden';
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
            updateButtons();
        }
    }

    // Function to update the state of the "Previous" and "Next" buttons
    function updateButtons() {
        // If we're at the very beginning, hide the "Previous" button
        if (categoriesContainer.scrollLeft === 0) {
            prevButton.style.visibility = 'hidden'; // Hide the button, but preserve the space
        } else {
            prevButton.style.visibility = 'visible'; // Show the button
        }

        // If we're at the very end, hide the "Next" button
        if (categoriesContainer.scrollLeft + categoriesContainer.clientWidth >= categoriesContainer.scrollWidth) {
            nextButton.style.visibility = 'hidden'; // Hide the button, but preserve the space
        } else {
            nextButton.style.visibility = 'visible'; // Show the button
        }
    }

    // Trigger the button update on load
    initCarousel();

    // Re-evaluate screen size when the window is resized
    window.addEventListener('resize', initCarousel);

    // "Next" button to scroll to the right
    nextButton.addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: categoryWidth * 2, behavior: 'smooth' });
        setTimeout(updateButtons, 300); // Update after the transition
    });

    // "Previous" button to scroll to the left
    prevButton.addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: -categoryWidth * 2, behavior: 'smooth' });
        setTimeout(updateButtons, 300); // Update after the transition
    });

    // Update buttons in case the user manually scrolls
    categoriesContainer.addEventListener('scroll', updateButtons);

    // Handle swipe gestures
    categoriesContainer.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    categoriesContainer.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    categoriesContainer.addEventListener('touchend', () => {
        const swipeDistance = startX - endX;
        const swipeThreshold = 50; // Swipe threshold

        if (swipeDistance > swipeThreshold) {
            // Swipe to the left (next)
            categoriesContainer.scrollBy({ left: categoryWidth * 2, behavior: 'smooth' });
        } else if (swipeDistance < -swipeThreshold) {
            // Swipe to the right (previous)
            categoriesContainer.scrollBy({ left: -categoryWidth * 2, behavior: 'smooth' });
        }

        setTimeout(updateButtons, 300); // Update after the swipe
    });
}
