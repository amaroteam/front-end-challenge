import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './components/ProductPage/ProductPage';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produto/" component={ProductPage} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
