import { createStore } from "redux";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

export default createStore(
  shoppingCartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
