import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/amaro-logo.png';

const Header = () => (
  <header className="App__header">
    <Link to="/" className="App__header__link">
      <img src={logo} className="App__logo" alt="Amaro logo" />
    </Link>
  </header>
);

export default Header;
