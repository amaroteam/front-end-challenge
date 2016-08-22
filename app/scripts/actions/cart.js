import { ActionTypes } from 'constants/index';

/**
 * Toggle Cart visibility
 * @param {Boolean} [payload]
 *
 * @returns {function}
 */
export function toggleCart(payload) {
  return dispatch =>
    Promise.resolve(dispatch({
      type: ActionTypes.TOGGLE_CART,
      payload
    }));
}

/**
 * Add product to cart
 * @param {Object} payload
 * @returns {Object}
 */
export function addToCart(payload) {
  return dispatch =>
    Promise.resolve(dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload
    }));
}

/**
 * Remove product from cart
 * @param {Object} payload
 * @returns {Object}
 */
export function removeFromCart(payload) {
  return dispatch =>
    Promise.resolve(dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload
    }));
}

/**
 * Update cart
 * @param {Object} payload
 * @returns {Object}
 */
export function updateCart(payload) {
  return dispatch =>
    Promise.resolve(dispatch({
      type: ActionTypes.UPDATE_CART,
      payload
    }));
}

