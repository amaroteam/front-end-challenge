import React from 'react';
import ReactDOM from 'react-dom';
import App from './source/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './source/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

const initialState = {
	cart: []
};

const config = {
	key: 'cart',
	storage
};

const persistedReducer = persistReducer(config, Reducers);

let store = createStore(persistedReducer, initialState);
let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('app'),
);
