import React from 'react';
import { Link } from 'react-router-dom';
import { SearchButton, CartButton } from '../../components/Button/IconButtons';
import { Counter as CartCounter } from '../../components/Counter';

import Brand from '../../components/Brand';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="app__container">
      <div className="header__content">
        <Link to="/">
          <Brand className="header__brand" />
        </Link>

        <div className="header__icons">
          <SearchButton className="header__icons--search" />
          <CartButton className="header__icons--cart">
            <CartCounter />
          </CartButton>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
