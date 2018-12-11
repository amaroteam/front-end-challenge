import productsEndpoint from './products.json';
import { filterProductBySlug } from '../utils/productHandler';

const getProducts = mockedData => new Promise(resolve => resolve([...mockedData.products]));

const getProductByPathname = pathname => new Promise(resolve => (
  resolve(filterProductBySlug(pathname, productsEndpoint, getProducts))
));

const api = {
  getProducts: () => getProducts(productsEndpoint),
  getProductByPathname: pathname => getProductByPathname(pathname),
};

export default api;
