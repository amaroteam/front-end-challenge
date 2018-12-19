import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../assets/styles/index.scss';

import PageLayout from '../layouts/PageLayout';
import Products from '../containers/Products';
import ProductsDetails from './Products/ProductsDetails';

import Basket from '../containers/Basket';

const App = () => (
  <Router>
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/p/:friendlyURL" component={ProductsDetails} />
        <Route exact path="/sacola" component={Basket} />
      </Switch>
    </PageLayout>
  </Router>
);

export default App;
