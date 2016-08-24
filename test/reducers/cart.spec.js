import expect from 'expect';
import { REHYDRATE } from 'redux-persist/constants';

import reducers from 'reducers/index';
import { cartState } from 'reducers/cart';
import { ActionTypes } from 'constants/index';
// import {  } from 'actions';

describe('• Cart', () => {
  it('should return the initial state', () => {
    expect(reducers.cart(undefined, {}))
      .toEqual(cartState);
  });

  it(`should handle ${REHYDRATE}`, () => {
    expect(reducers.cart(undefined, {
      type: REHYDRATE,
      payload: {
        cart: {}
      }
    }))
      .toEqual(Object.assign({}, cartState, { rehydrated: true }, {}));
  });

  it(`should handle ${ActionTypes.ADD_TO_CART}`, () => {
    const item = { sku: 1, price: 149.9, quantity: 1 };
    expect(reducers.cart(undefined, {
      type: ActionTypes.ADD_TO_CART,
      payload: item
    }))
      .toEqual({ ...cartState, items: [item], subtotal: 149.9, total: 164.89, quantity: 1 });
  });

  it(`should handle ${ActionTypes.UPDATE_CART_QUANTITY}`, () => {
    const state = { ...cartState, items: [{ sku: 1, price: 149.9, quantity: 1 }] };

    const newState = reducers.cart(state, {
      type: ActionTypes.UPDATE_CART_QUANTITY,
      payload: { sku: 1, value: 1 }
    });

    expect(newState)
      .toEqual({
        ...cartState,
        items: [{ sku: 1, price: 149.9, quantity: 2 }],
        subtotal: 299.8,
        total: 314.79,
        quantity: 2
      });

    expect(reducers.cart(newState, {
      type: ActionTypes.UPDATE_CART_QUANTITY,
      payload: { sku: 1, value: -2 }
    }))
      .toEqual({ ...cartState });
  });

  it(`should handle ${ActionTypes.REMOVE_FROM_CART}`, () => {
    const state = { ...cartState, items: [{ sku: 1, price: 149.9, quantity: 1 }] };

    expect(reducers.cart(state, {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: { sku: 1 }
    }))
      .toEqual({ ...cartState });
  });

  it(`should handle ${ActionTypes.RESET_CART}`, () => {
    const state = { ...cartState, items: [{ sku: 1, price: 149.9, quantity: 1 }] };

    expect(reducers.cart(state, {
      type: ActionTypes.RESET_CART
    }))
      .toEqual({ ...cartState });
  });

  it(`should handle ${ActionTypes.TOGGLE_CART}`, () => {
    expect(reducers.cart(undefined, {
      type: ActionTypes.TOGGLE_CART,
      payload: true
    }))
      .toEqual({ ...cartState, visible: true });
  });
});

