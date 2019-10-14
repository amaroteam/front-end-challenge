import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Products, Cart } from './pages';
import { Logo } from './components';

import './Normalize.css';
import './App.css';

const StyledWrapper = styled.div`
  padding: 30px 20px;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  vertical-align: center;

  .logo {
    margin: 0 0 30px;
  }
`;

function App() {
  return (
    <StyledWrapper>
      <div className='logo'>
        <Logo />
      </div>
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
    </StyledWrapper>
  );
}

export default App;
