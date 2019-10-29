import { UPDATE_CART } from './actionTypes';

export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += Number(p.actual_price.replace('R$', '').replace(',', '.')) * p.quantity;
    return sum;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
