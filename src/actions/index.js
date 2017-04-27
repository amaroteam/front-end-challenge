import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

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