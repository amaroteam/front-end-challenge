import { combineReducers } from 'redux'

import products from './products'
import shoppingCart from './shoppingCart'

const shoppingReducers = combineReducers({
  products,
  shoppingCart
})

export default shoppingReducers
