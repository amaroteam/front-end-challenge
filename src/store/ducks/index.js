import { combineReducers } from 'redux';

import overlay from './overlay';
import filter from './filter';

export default combineReducers({
  overlay,
  filter,
});
