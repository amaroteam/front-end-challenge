import { axiosInstance } from '../utils/client';

export const addProductToCart = ({ product, selectedSize }) => ({
  type: 'ADD_PRODUCT_CART',
  product,
  selectedSize,
});

export const deleteProductFromCart = id => ({
  type: 'DELETE_PRODUCT_CART',
  id,
});

export const updateProductFromCart = product => ({
  type: 'EDIT_PRODUCT_CART',
  product,
});

export const loadProducts = list => ({
  type: 'LOAD_PRODUCTS',
  list,
});

export const getProducts = () => {
  return dispatch =>
    axiosInstance.get('/products').then(({ data: { products } }) => {
      dispatch(loadProducts(products));
    });
};
