import { combineReducers } from 'redux'

import products from './products'
import shoppingCart from './shoppingCart'
import listFilter from './listFilter'

const shoppingReducers = combineReducers({
  products,
  shoppingCart,
  listFilter
})

export default shoppingReducers
