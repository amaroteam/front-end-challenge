import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import '../../styles/containers/HeaderAmaro.scss';

import LogoIcon from '../../assets/icons/logo.svg';
import CartIcon from '../../assets/icons/shopping-bag.svg';

const HeaderAmaro = () => {
  return (
    <header className="header">
      <div className="header__top-bar">
        <strong className="header__top-bar-text">
          Amaro Teste Front-End
        </strong>
      </div>
      <div className="header__container">
        <Link to="/">
          <ReactSVG src={LogoIcon} />
        </Link>
        <button className="header__container-cart" type="button">
          <span className="header__container-cart-qty">5</span>
          <ReactSVG src={CartIcon} />
        </button>
      </div>
    </header>
  );
};

export default HeaderAmaro;
