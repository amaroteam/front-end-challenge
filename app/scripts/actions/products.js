import { ActionTypes } from 'constants/index';

/**
 * Load products from JSON
 * @param {Array} payload
 * @returns {Object}
 */
export function loadProducts(payload) {
  return dispatch =>
    dispatch({
      type: ActionTypes.LOAD_PRODUCTS,
      payload
    });
}
