import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const ROOT_URL = 'http://localhost:3000';

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}/products`);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}