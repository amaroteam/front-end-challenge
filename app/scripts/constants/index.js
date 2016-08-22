import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc Constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  LOAD_PRODUCTS: undefined,
  ADD_TO_CART: undefined,
  REMOVE_FROM_CART: undefined,
  UPDATE_CART_QUANTITY: undefined,
  TOGGLE_CART: undefined,
  RESET_CART: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined
});
