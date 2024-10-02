// Convert string to url slug
export function convertToUrlSlug(title) {
    return title
        .toLowerCase() // Convert to lowercase
        .normalize("NFD") // Normalize accented characters
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (accents)
        .replace(/[^a-z0-9 ]/g, "") // Remove special characters
        .trim() // Remove spaces at the beginning and end of the string
        .replace(/\s+/g, "-") // Replace spaces with dashes
}

// Capitalize first letter and all other to lower case
export function capitalizedWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

// Smooth scroll to top
export function scrollToTop() {
    window.scrollTo({
        top: 0, // Target Y position (0 for the top of the page)
        behavior: 'smooth' // Smooth scrolling
    })
}

// Empty targeted bloc
export function emptyBloc(blocId) {
    document.getElementById(blocId).innerHTML = ''
}