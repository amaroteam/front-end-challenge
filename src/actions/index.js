import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SHOW_CART = 'SHOW_CART';

const ROOT_URL = 'http://localhost:3000';

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}/products`);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}

export function showCart() {
  return {
    type: SHOW_CART,
    payload: 'showing the cart'
  };
}