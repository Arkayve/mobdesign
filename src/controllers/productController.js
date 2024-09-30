import { fetchProducts } from '../models/productModel.js';
import { renderProducts } from '../view/productView.js';

export async function loadProducts() {
  const products = await fetchProducts();
  renderProducts(products);
}
