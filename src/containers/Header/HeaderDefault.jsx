import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Creators } from '../../store/ducks/drawer';
import { SearchButton, CartButton } from '../../components/Button/IconButtons';
import { Counter as CartCounter } from '../../components/Counter';
import Header from '.';

import Brand from '../../components/Brand';
import './Header.scss';

const { toogleCart, toogleSearch } = Creators;

const HeaderDefault = ({
  toogleCartConnected,
  toogleSearchConnected,
  cartCounter,
}) => (
  <Header>
    <div className="header__default">
      <Link to="/">
        <Brand className="header__brand" />
      </Link>

      <div className="header__icons">
        <SearchButton
          className="header__icons--search"
          onClick={toogleSearchConnected}
        />
        <CartButton
          className="header__icons--cart"
          onClick={toogleCartConnected}
        >
          <CartCounter counter={cartCounter} />
        </CartButton>
      </div>
    </div>
  </Header>
);

HeaderDefault.propTypes = {
  toogleCartConnected: PropTypes.func.isRequired,
  toogleSearchConnected: PropTypes.func.isRequired,
  cartCounter: PropTypes.number,
};

HeaderDefault.defaultProps = {
  cartCounter: 0,
};

const mapStateToProps = store => ({
  cartCounter: store.cart.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toogleCartConnected: toogleCart,
  toogleSearchConnected: toogleSearch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDefault);
