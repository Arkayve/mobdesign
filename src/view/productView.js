export function renderProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>Prix : ${product.price}€</p>
        <button onclick="addToCart(${product.id})">Ajouter au panier</button>
      `;
      productList.appendChild(productElement);
    });
}