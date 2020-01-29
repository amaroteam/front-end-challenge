import { combineReducers } from 'redux';

import overlay from './overlay';
import filter from './filter';
import products from './products';
import quickview from './quickview';
import minicart from './minicart';

export default combineReducers({
  minicart,
  overlay,
  filter,
  products,
  quickview,
});
