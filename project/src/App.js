import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Products, Cart } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
