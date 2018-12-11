import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import drawerReducer from './drawer';
import productsReducer from './products';
import productReducer from './product';
import cartReducer from './cart';
import searchReducer from './search';

const reducers = history => combineReducers({
  router: connectRouter(history),
  drawer: drawerReducer,
  cart: cartReducer,
  catalog: productsReducer,
  single: productReducer,
  search: searchReducer,
});

export default reducers;
