import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import storeReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

export default history => {
  const middlewares = [ routerMiddleware(history) ];

  const enhancers = [ applyMiddleware(...middlewares) ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    connectRouter(history)(persistedReducer),
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store);

  return { store, persistor };
};
