import productsEndpoint from './products.json';
import { productSlugFilter } from '../utils/productHandler';

const getProducts = mockedData => new Promise(resolve => resolve([...mockedData.products]));

const getProductBySlug = slug => new Promise(resolve => (
  resolve(productSlugFilter(slug, productsEndpoint, getProducts))
));

const api = {
  getProducts: () => getProducts(productsEndpoint),
  getProductBySlug: slug => getProductBySlug(slug),
};

export default api;
