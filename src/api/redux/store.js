import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers/index';

const Store = (initialState) => {
    initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
    const store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(...[thunk])
      )
    );

    store.subscribe(() => {
      const state = store.getState();
      const persist = {
        cart: state.cart,
        total: state.total
      };
  
      window.localStorage.setItem('state', JSON.stringify(persist));
    });
    return store;
};

export default Store;
  
  
  