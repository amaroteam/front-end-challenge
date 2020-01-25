import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import '../../styles/containers/HeaderAmaro.scss';

import LogoIcon from '../../assets/icons/logo.svg';
import CartIcon from '../../assets/icons/shopping-bag.svg';

import Button from '../../components/Button';
import Container from '../../layout/Container';

const HeaderAmaro = () => {
  return (
    <header className="am-header">
      <div className="am-header__top">
        <p className="am-header__top-text">Amaro Teste Front-End</p>
      </div>
      <Container>
        <div className="am-header__wrapper">
          <Link to="/" className="am-header__wrapper-logo">
            <ReactSVG src={LogoIcon} />
          </Link>
          <Button type="button" className="am-header__wrapper-cart">
            <span className="am-header__wrapper-cart-qty">5</span>
            <ReactSVG src={CartIcon} />
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default HeaderAmaro;
