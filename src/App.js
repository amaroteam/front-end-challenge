import React, { Fragment } from 'react';
import List from './components/List'
import Cart from './components/Cart'

function App() {
  return (
    <Fragment>
      <div className="main-container">
        <List />
      </div>
      <Cart />
   </Fragment>
  );
}

export default App;
