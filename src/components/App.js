import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../assets/styles/index.scss';

import PageLayout from '../layouts/PageLayout';
import ProductsContainer from '../containers/ProductsContainer';

const App = () => (
  <Router>
    <PageLayout>
      <Switch>
        <Route exact path="/" component={ProductsContainer} />
      </Switch>
    </PageLayout>
  </Router>
);

export default App;
