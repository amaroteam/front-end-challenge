import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductPage from './pages/ProductPage';

const Routes = () => (
  <Switch>
    <Route path="/p/:id" component={ProductPage} />
  </Switch>
);

export default Routes;
