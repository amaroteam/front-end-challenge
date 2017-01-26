import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './Home/';
import Products from './Products';
import Cart from './Cart';
import App from './App';
import './index.css';

ReactDOM.render(

  (<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/cart' component={Cart} />
    </Route>
  </Router>),
  document.getElementById('root')
);
