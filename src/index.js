import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

import App from './App';
import Cart from './Cart';

import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';

import productsData from './data/products';

import 'material-design-lite/dist/material.min.css'
import 'material-design-lite/dist/material.min.js'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render((
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/cart" component={Cart}/>
            </div>
        </Router>
    </Provider>
), document.getElementById('app'));
