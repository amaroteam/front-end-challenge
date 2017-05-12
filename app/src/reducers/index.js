/**
 * Reducers
 */
import { combineReducers } from 'redux'

import cart from './cartReducer'
import products from './productsReducer'

export default combineReducers({
  products,
  cart
})
