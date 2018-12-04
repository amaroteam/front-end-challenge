import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import productsReducer from './products';

const reducers = history => combineReducers({
  router: connectRouter(history),
  catalog: productsReducer,
});

export default reducers;
