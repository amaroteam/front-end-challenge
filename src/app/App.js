import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../styles/app.scss';

import store from '../store';

import HeaderAmaro from '../containers/HeaderAmaro';
import Routes from '../routes';
import HomePage from '../pages/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderAmaro />
        <HomePage />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
