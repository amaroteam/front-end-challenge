import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Icon from '../Icon';
import Logo from '../Logo';
import { StyledWrapper } from './style';

function Nav() {
  const counter = useSelector(state => state.cart.length);

  return (
    <StyledWrapper>
      <div className='logo'>
        <Link to='/products'>
          <Logo />
        </Link>
      </div>

      <div className='menu'>
        <Link to='/products'>
          <Icon name='search' size='1.7em' />
        </Link>
        <Link className='cart' to='/cart'>
          <Icon name='cart' size='1.7em' />
          {counter > 0 && <span className='badge'>{counter}</span>}
        </Link>
      </div>
    </StyledWrapper>
  );
}

export default Nav;
