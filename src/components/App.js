import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../assets/styles/index.scss';

import PageLayout from '../layouts/PageLayout';
import ProductsContainer from '../containers/ProductsContainer';
import ProductsDetails from './Products/ProductsDetails';

const App = () => (
  <Router>
    <PageLayout>
      <Switch>
        <Route exact path="/" component={ProductsContainer} />
        <Route exact path="/p/:friendlyURL" component={ProductsDetails} />
      </Switch>
    </PageLayout>
  </Router>
);

export default App;
