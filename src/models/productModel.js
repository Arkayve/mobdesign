export async function fetchProducts() {
    const response = await fetch('/public/data/products.json');
    const products = await response.json();
    return products;
}