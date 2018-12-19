import { SET_PRODUCTS, SET_BASKET, REMOVE_BASKET } from './actionTypes';

export const setProducts = data => ({
  type: SET_PRODUCTS,
  data,
});

export const setBasket = (name, image, color, size, qtd, price) => ({
  type: SET_BASKET,
  data: {
    name,
    image,
    color,
    size,
    qtd,
    price,
  },
});

export const removeBasket = index => ({
  type: REMOVE_BASKET,
  index,
});
