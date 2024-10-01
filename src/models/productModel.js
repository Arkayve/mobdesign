export async function fetchProducts() {
    const localData = localStorage.getItem('productsData');
    const localLastModified = localStorage.getItem('productsLastModified');

    // Si des données sont présentes dans le localStorage
    if (localData && localLastModified) {
        try {
            // Faire une requête HEAD pour obtenir uniquement les en-têtes sans télécharger tout le fichier JSON
            const headResponse = await fetch('/public/data/products.json', { method: 'HEAD' });
            const lastModified = headResponse.headers.get('Last-Modified');

            // Si la date "Last-Modified" du fichier distant est plus récente, on met à jour les données
            if (lastModified && new Date(lastModified) > new Date(localLastModified)) {
                console.log('Le fichier JSON a été modifié. Réimportation des nouvelles données...');
                return await importNewData(lastModified);
            } else {
                console.log('Les données locales sont à jour. Utilisation du localStorage.');
                return JSON.parse(localData); // Retourne les données du localStorage
            }
        } catch (error) {
            console.error('Erreur lors de la vérification du fichier distant :', error);
            return JSON.parse(localData); // En cas d'erreur, on utilise les données du localStorage
        }
    } else {
        // Si aucune donnée locale n'est présente, on télécharge les données du serveur
        console.log('Aucune donnée dans le localStorage. Téléchargement des données depuis le serveur...');
        return await importNewData();
    }
}

// Fonction pour télécharger et stocker les nouvelles données
async function importNewData(lastModified = null) {
    try {
        const response = await fetch('/public/data/products.json');
        const products = await response.json();
        
        // Mettre à jour le localStorage avec les nouvelles données
        localStorage.setItem('productsData', JSON.stringify(products));

        // Mettre à jour la date de dernière modification dans le localStorage
        if (!lastModified) {
            lastModified = response.headers.get('Last-Modified');
        }
        localStorage.setItem('productsLastModified', lastModified);

        console.log('Les nouvelles données ont été importées et stockées.');
        return products;
    } catch (error) {
        console.error('Erreur lors de l\'importation des nouvelles données :', error);
        throw error;
    }
}
