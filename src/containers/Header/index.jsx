import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ children }) => (
  <header className="header">
    <div className="app__container">
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
