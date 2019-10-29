import { combineReducers } from 'redux';
import listReducer from './list';
import cartReducer from './cart';
import totalReducer from './total';

const reducers = combineReducers({
  cart: cartReducer,
  list: listReducer,
  total: totalReducer
});

export default reducers;
