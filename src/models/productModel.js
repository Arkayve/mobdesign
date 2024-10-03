// Function to check localStorage or fetch the data
export async function getProductsFromStorageOrServer() {
    const localData = localStorage.getItem('productsData')
    const localLastModified = localStorage.getItem('productsLastModified')

    // If data is present in localStorage
    if (localData && localLastModified) {
        try {
            // Make a HEAD request to check the headers without downloading the entire JSON file
            const headResponse = await fetch('/src/assets/data/products.json', { method: 'HEAD' })
            const lastModified = headResponse.headers.get('Last-Modified')

            // If the 'Last-Modified' date of the remote file is more recent, update the data
            if (lastModified && new Date(lastModified) > new Date(localLastModified)) {
                console.log('Le fichier JSON a été modifié. Réimportation des nouvelles données...')
                return await importNewData(lastModified)
            } else {
                console.log('Les données locales sont à jour. Utilisation du localStorage.')
                return JSON.parse(localData) // Return the data from localStorage
            }
        } catch (error) {
            console.error('Erreur lors de la vérification du fichier distant :', error)
            return JSON.parse(localData) // In case of an error, use the data from localStorage
        }
    } else {
        // If no local data is present, fetch the data from the server
        console.log('Aucune donnée dans le localStorage. Téléchargement des données depuis le serveur...')
        return await importNewData()
    }
}

// Function to fetch and store the new data
async function importNewData(lastModified = null) {
    try {
        const response = await fetch('/src/assets/data/products.json')
        const products = await response.json()

        // Update localStorage with the new data
        localStorage.setItem('productsData', JSON.stringify(products))

        // Update the last modified date in localStorage
        if (!lastModified) {
            lastModified = response.headers.get('Last-Modified')
        }
        localStorage.setItem('productsLastModified', lastModified)

        console.log('Les nouvelles données ont été importées et stockées.')
        return products
    } catch (error) {
        console.error('Erreur lors de l\'importation des nouvelles données :', error)
        throw error
    }
}
