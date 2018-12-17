import { SET_PRODUCTS, SET_BASKET } from './actionTypes';

export const setProducts = data => ({
  type: SET_PRODUCTS,
  data,
});

export const setBasket = (id, size, qtd) => ({
  type: SET_BASKET,
  data: {
    id: id,
    size: size,
    qtd: qtd,
  },
});
