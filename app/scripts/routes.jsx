import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { scrollBefore } from 'utils/routerInterceptor';

import App from 'containers/App';
import Products from 'routes/Products';
import NotFound from 'routes/NotFound';

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Products} onEnter={scrollBefore} />
      <Route path="*" component={NotFound} onEnter={scrollBefore} />
    </Route>
  );
}
