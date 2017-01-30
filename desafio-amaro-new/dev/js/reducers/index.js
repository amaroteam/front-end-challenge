import {combineReducers} from 'redux';
import ProductsReducer from './reducer-products';
import SendProductToCartReducer from './reducer-send-cart';

const allReducers = combineReducers({
    products: ProductsReducer,
    sendProductToCartReducer: SendProductToCartReducer
});

export default allReducers
