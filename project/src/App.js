import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Products from './pages/Products';
import Cart from './pages/Cart';

import Nav from './components/Nav';

import './Normalize.css';
import './App.css';

const StyledWrapper = styled.div`
  padding: 30px 20px;
  max-width: 1400px;
  margin: 0 auto;
  vertical-align: center;
  position: relative;
`;

function App() {
  return (
    <StyledWrapper>
      <Nav />

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
    </StyledWrapper>
  );
}

export default App;
