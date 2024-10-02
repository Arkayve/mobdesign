import { convertToUrlSlug, capitalizedWord, emptyBloc } from '/src/assets/js/_utils'

export function renderCategory(products) {

    // Use a Set to extract the unique categories
    const categories = new Set(products.map(product => product.category))

    // Convert the Set to an array
    const uniqueCategories = Array.from(categories)

    emptyBloc('categories__section')
    const categories__background = document.createElement('div')
    categories__background.id = 'categories__background'
    categories__background.classList.add('categories__background')
    document.getElementById('categories__section').appendChild(categories__background)
    const categories__title = document.createElement('h3')
    categories__title.id = 'categories__title'
    document.getElementById('categories__background').appendChild(categories__title)
    const categories__description = document.createElement('p')
    categories__description.id = 'categories__description'
    document.getElementById('categories__background').appendChild(categories__description)
    const categories__container = document.createElement('div')
    categories__container.id = 'categories__container'
    categories__container.classList.add('categories__container')
    document.getElementById('categories__background').appendChild(categories__container)

    document.getElementById('categories__title').textContent = 'Notre collection'
    document.getElementById('categories__description').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // Dinamize category template
    uniqueCategories.forEach(category => {
        const categoryTemplate = document.getElementById('categoryTemplate')
        const categoryContainer = document.importNode(categoryTemplate.content, true)

        categoryContainer.querySelector('.js-category__img').src = '/src/assets/images/' + category + '.png'
        categoryContainer.querySelector('.js-category__img').alt = 'image ' + category

        categoryContainer.querySelector('.js-category__title').textContent = capitalizedWord(category)
        categoryContainer.querySelector('.js-category__title').setAttribute('href', '#' + convertToUrlSlug(category))
        document.getElementById('categories__container').appendChild(categoryContainer)
    }) 
}
