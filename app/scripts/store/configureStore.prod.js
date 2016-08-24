import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import rootReducer from 'reducers/index';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}));

export default (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunk, routerMiddleware(browserHistory))(createStore);

  return createStoreWithMiddleware(reducer, initialState);
};
