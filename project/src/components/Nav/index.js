import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import Logo from '../Logo';
import { StyledWrapper } from './style';

function Nav() {
  return (
    <StyledWrapper>
      <div className='logo'>
        <Logo />
      </div>

      <div className='menu'>
        <Link to='/cart'>
          <Icon name='cart' size='2.2em' />
        </Link>
      </div>
    </StyledWrapper>
  );
}

export default Nav;
