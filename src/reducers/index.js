import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import filter from './filter'

const rootReducer = combineReducers({
  products,
  cart,
  filter
})

export default rootReducer