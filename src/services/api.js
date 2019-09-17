import { products } from './products.json';

const getProducts =  () => products
const getProduct =  id => products.filter(product => product.code_color === id)[0]

export { getProducts, getProduct }