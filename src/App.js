import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import history from "./services/history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={2000} />
      </Router>
    </Provider>
  );
}

export default App;
