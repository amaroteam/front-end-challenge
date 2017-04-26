import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({
  products: ProductsReducer
});

export default rootReducer;