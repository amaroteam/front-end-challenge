import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../styles/app.scss';

import HeaderAmaro from '../containers/HeaderAmaro';
import Routes from '../routes';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderAmaro />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
