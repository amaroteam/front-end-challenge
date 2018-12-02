import React from 'react';
import Brand from '../../components/Brand';
import { SearchButton, CartButton } from '../../components/Button/IconButtons';
import { Counter as CartCounter } from '../../components/Counter';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="app__container">
      <div className="header__content">
        <Brand className="header__brand" />

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
