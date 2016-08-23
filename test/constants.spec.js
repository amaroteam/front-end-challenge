import expect from 'expect';
import { ActionTypes } from 'constants/index';

describe('CONSTANTS', () => {
  it('should have "ADD_TO_CART"', () => {
    expect(ActionTypes.ADD_TO_CART).toEqual('ADD_TO_CART');
  });

  it('should have "REMOVE_FROM_CART"', () => {
    expect(ActionTypes.REMOVE_FROM_CART).toEqual('REMOVE_FROM_CART');
  });

  it('should have "UPDATE_CART_QUANTITY"', () => {
    expect(ActionTypes.UPDATE_CART_QUANTITY).toEqual('UPDATE_CART_QUANTITY');
  });

  it('should have "TOGGLE_CART"', () => {
    expect(ActionTypes.TOGGLE_CART).toEqual('TOGGLE_CART');
  });

  it('should have "RESET_CART"', () => {
    expect(ActionTypes.RESET_CART).toEqual('RESET_CART');
  });

  it('should have "LOAD_PRODUCTS"', () => {
    expect(ActionTypes.LOAD_PRODUCTS).toEqual('LOAD_PRODUCTS');
  });

  it('should have "SHOW_ALERT"', () => {
    expect(ActionTypes.SHOW_ALERT).toEqual('SHOW_ALERT');
  });

  it('should have "HIDE_ALERT"', () => {
    expect(ActionTypes.HIDE_ALERT).toEqual('HIDE_ALERT');
  });
});
