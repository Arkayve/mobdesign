import { fetchProducts } from '../models/productModel.js';
import { renderProducts } from '../view/productView.js';
import { renderCategory } from '../view/categoryView.js';

export async function loadProducts() {
  const products = await fetchProducts();
  renderCategory(products);
  renderProducts(products);
}
