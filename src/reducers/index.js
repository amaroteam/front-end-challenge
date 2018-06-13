import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
    cart,
    products,
});

export default rootReducer;