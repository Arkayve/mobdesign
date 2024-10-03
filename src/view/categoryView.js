import { convertToUrlSlug, capitalizedWord, emptyBloc } from '/src/assets/js/_utils'

export function renderCategory(products) {

    // Use a Set to extract the unique categories
    const categories = new Set(products.map(product => product.category))

    // Convert the Set to an array
    const uniqueCategories = Array.from(categories)

    emptyBloc('categories__section')

    // div categories__background
    const categories__background = document.createElement('div')
    categories__background.id = 'categories__background'
    categories__background.classList.add('categories__background')
    document.getElementById('categories__section').appendChild(categories__background)

    // h3 & p categories__title & __description
    const categories__title = document.createElement('h3')
    categories__title.id = 'categories__title'
    categories__title.classList.add('categories__title')
    document.getElementById('categories__background').appendChild(categories__title)
    const categories__description = document.createElement('p')
    categories__description.id = 'categories__description'
    categories__description.classList.add('categories__description')
    document.getElementById('categories__background').appendChild(categories__description)

    // div categories__carousel
    const categories__carousel = document.createElement('div')
    categories__carousel.id = 'categories__carousel'
    categories__carousel.classList.add('categories__carousel')
    document.getElementById('categories__background').appendChild(categories__carousel)

    // button categories__prev
    const categories__prev = document.createElement('button')
    categories__prev.id = 'categories__prev'
    categories__prev.classList.add('categories__prev')
    document.getElementById('categories__carousel').appendChild(categories__prev)

    // div categories__container
    const categories__container = document.createElement('div')
    categories__container.id = 'categories__container'
    categories__container.classList.add('categories__container')
    document.getElementById('categories__carousel').appendChild(categories__container)

    // button categories__next
    const categories__next = document.createElement('button')
    categories__next.id = 'categories__next'
    categories__next.classList.add('categories__next')
    document.getElementById('categories__carousel').appendChild(categories__next)

    // add content to categories__title & __description
    document.getElementById('categories__title').textContent = 'Notre collection'
    document.getElementById('categories__description').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // Dynamize category template
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
