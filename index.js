import React from 'react';
import ReactDOM from 'react-dom';
import App from './source/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './source/reducers';

const initialState = {
	cart: []
};

const store = createStore(Reducers, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
