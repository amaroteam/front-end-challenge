import { SET_PRODUCTS, SET_BASKET } from './actionTypes';

export const setProducts = data => ({
  type: SET_PRODUCTS,
  data,
});

export const setBasket = data => ({
  type: SET_BASKET,
  data,
});
