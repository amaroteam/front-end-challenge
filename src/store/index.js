import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import { saveState, loadState } from '../util/localStorage'

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    : applyMiddleware(sagaMiddleware);

const persistedState = loadState()
const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
  saveState(store.getState())
})

sagaMiddleware.run(rootSaga);

export default store;
