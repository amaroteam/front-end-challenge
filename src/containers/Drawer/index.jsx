import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderContext from '../Header/HeaderContext';
import Cart from '../Cart';
import Search from '../Search';

import './Drawer.scss';

const Drawer = ({
  isDrawerVisible,
  isCartOpen,
  isSearchOpen,
  cartCounter,
}) => (
  <div
    className={`drawer ${isDrawerVisible ? 'drawer--is-visible' : ''}`}
  >
    {isCartOpen && <HeaderContext headerTitle={`Sacola (${cartCounter})`} />}
    {isSearchOpen && <HeaderContext headerTitle="Buscar Produtos" />}

    <div className="drawer__content">
      {isCartOpen && <Cart />}
      {isSearchOpen && <Search />}
    </div>
  </div>
);

Drawer.propTypes = {
  isDrawerVisible: PropTypes.bool.isRequired,
  isCartOpen: PropTypes.bool,
  isSearchOpen: PropTypes.bool,
  cartCounter: PropTypes.number,
};

Drawer.defaultProps = {
  isCartOpen: false,
  isSearchOpen: false,
  cartCounter: 0,
};

const mapStateToProps = store => ({
  isDrawerVisible: store.drawer.isDrawerVisible,
  isCartOpen: store.drawer.isCartOpen,
  isSearchOpen: store.drawer.isSearchOpen,
  cartCounter: store.cart.count,
});

export default connect(mapStateToProps)(Drawer);
