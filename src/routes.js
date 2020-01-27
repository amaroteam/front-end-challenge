import React from 'react';
import { Switch, Route } from 'react-router-dom';

import QuickView from './pages/QuickView';

const Routes = () => (
  <Switch>
    <Route path="/p/:id" component={QuickView} />
  </Switch>
);

export default Routes;
