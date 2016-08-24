import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { scrollBefore } from 'utils/routerInterceptor';

import App from 'containers/App';
import Products from 'containers/Products';
import NotFound from 'containers/NotFound';

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Products} onEnter={scrollBefore} />
      <Route path="*" component={NotFound} onEnter={scrollBefore} />
    </Route>
  );
}
