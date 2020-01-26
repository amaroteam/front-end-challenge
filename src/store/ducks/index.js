import { combineReducers } from 'redux';

import overlay from './overlay';
import filter from './filter';
import products from './products';

export default combineReducers({
  overlay,
  filter,
  products,
});
