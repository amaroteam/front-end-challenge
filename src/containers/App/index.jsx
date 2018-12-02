import React, { Component } from 'react';
import Header from '../Header';
import Products from '../Products';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
