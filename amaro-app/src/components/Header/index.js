import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import { logo } from '../../assets/images/logo-amaro.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Amaro roupas" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </Cart>
    </Container>
  );
}
