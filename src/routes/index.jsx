import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import App from '../containers/App';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Routes = () => (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </App>
  </ConnectedRouter>
);

export default Routes;
