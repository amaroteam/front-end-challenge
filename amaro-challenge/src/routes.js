import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Base from './components/BaseComponent';
import Catalog from './components/CatalogComponent';
import ShoppingCart from './components/ShoppingCartComponent';


export const getRoutes = () => {

  return (
    <Route path="/" component={Base}>
      <IndexRoute component={Catalog} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/shoppingCart" component={ShoppingCart} />
    </Route>
  )
}
