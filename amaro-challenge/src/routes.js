import React from 'react';
import { Route } from 'react-router';

import Base from './components/BaseComponent'
import Catalog from './components/CatalogComponent'


export const getRoutes = () => {

  return (
    <Route path="/" component={Base}>
      <Route path="/catalog" component={Catalog} />
    </Route>
  )
}
