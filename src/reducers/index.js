import { combineReducers } from 'redux'
import cart from './cart'
import filter from './filter'

const shopApp = combineReducers({
  cart,
  filter
})

export default shopApp