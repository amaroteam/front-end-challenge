import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';
import CartReducer from './reducer_cart';

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer
});

export default rootReducer;