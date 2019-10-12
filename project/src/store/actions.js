import { client } from '../utils';

const addProductToCart = product => ({ type: 'ADD_PRODUCT_CART', product });
const deleteProductFromCart = id => ({ type: 'DELETE_PRODUCT_CART', id });

export const loadProducts = list => ({
  type: 'LOAD_PRODUCTS',
  list,
});

export const getProducts = () => {
  return dispatch =>
    client.get('/products').then(({ data: { products } }) => {
      dispatch(loadProducts(products));
    });
};

export default {
  addProductToCart,
  deleteProductFromCart,
  getProducts,
};
