import React from 'react';
import '../../styles/containers/HeaderAmaro.scss';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import Logo from '../../assets/icons/logo.svg';

const HeaderAmaro = () => {
  return (
    <header className="header">
      <Link to="/">
        <ReactSVG src={Logo} />
      </Link>
    </header>
  );
};

export default HeaderAmaro;
