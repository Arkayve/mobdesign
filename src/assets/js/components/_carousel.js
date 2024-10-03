export function carouselNavigation() {
    const categoriesContainer = document.getElementById('categories__container')
    const prevButton = document.getElementById('categories__prev')
    const nextButton = document.getElementById('categories__next')

    // Width of a category (you can adjust this)
    const categoryWidth = categoriesContainer.querySelector('.category__container').offsetWidth // Width + margin

    // Function to update the state of the "Previous" and "Next" buttons
    function updateButtons() {
        // If we're at the very beginning, hide the "Previous" button
        if (categoriesContainer.scrollLeft === 0) {
            prevButton.style.visibility = 'hidden' // Hide the button, but preserve the space
        } else {
            prevButton.style.visibility = 'visible' // Show the button
        }

        // If we're at the very end, hide the "Next" button
        if (categoriesContainer.scrollLeft + categoriesContainer.clientWidth >= categoriesContainer.scrollWidth) {
            nextButton.style.visibility = 'hidden' // Hide the button, but preserve the space
        } else {
            nextButton.style.visibility = 'visible' // Show the button
        }
    }

    // Trigger the button update on load
    updateButtons()

    // "Next" button to scroll to the right
    nextButton.addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: categoryWidth * 2, behavior: 'smooth' })
        setTimeout(updateButtons, 300) // Update after the transition
    })

    // "Previous" button to scroll to the left
    prevButton.addEventListener('click', () => {
        categoriesContainer.scrollBy({ left: -categoryWidth * 2, behavior: 'smooth' })
        setTimeout(updateButtons, 300) // Update after the transition
    })

    // Update buttons in case the user manually scrolls
    categoriesContainer.addEventListener('scroll', updateButtons)
}
