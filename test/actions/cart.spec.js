import expect, { createSpy } from 'expect';

import * as cart from 'actions/cart';
import { ActionTypes } from 'constants/index';

const dispatch = createSpy();
const getState = createSpy();

describe('cart', () => {
  afterEach(() => {
    dispatch.reset();
  });

  it(`should dispatch ${ActionTypes.ADD_TO_CART}`, () => {
    cart.addToCart({ sku: 1 })(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.ADD_TO_CART,
      payload: { sku: 1 }
    });
  });

  it(`should dispatch ${ActionTypes.REMOVE_FROM_CART}`, () => {
    cart.removeFromCart({ sku: 1 })(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: { sku: 1 }
    });
  });

  it(`should dispatch ${ActionTypes.UPDATE_CART_QUANTITY}`, () => {
    cart.updateCart({ sku: 1, value: 1 })(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.UPDATE_CART_QUANTITY,
      payload: { sku: 1, value: 1 }
    });
  });

  it(`should dispatch ${ActionTypes.RESET_CART}`, () => {
    cart.resetCart()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.RESET_CART
    });
  });

  it(`should dispatch ${ActionTypes.TOGGLE_CART}`, () => {
    cart.toggleCart(true)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.TOGGLE_CART,
      payload: true
    });
  });
});
