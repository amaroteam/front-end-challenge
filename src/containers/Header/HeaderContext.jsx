import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { BackButton } from '../../components/Button/IconButtons';
import { Creators } from '../../store/ducks/drawer';
import Header from '.';

import './Header.scss';

const { dismissDrawer } = Creators;

const HeaderContext = ({ dismissDrawerConnected, headerTitle }) => (
  <Header>
    <div className="header__context">
      <div className="header__icons">
        <BackButton
          className="header__icons--back"
          onClick={dismissDrawerConnected}
        />
      </div>

      <div className="header__title">
        {headerTitle}
      </div>
    </div>
  </Header>
);

HeaderContext.propTypes = {
  dismissDrawerConnected: PropTypes.func.isRequired,
  headerTitle: PropTypes.string,
};

HeaderContext.defaultProps = {
  headerTitle: '',
};

const mapDispatchToProps = dispatch => bindActionCreators({
  dismissDrawerConnected: dismissDrawer,
}, dispatch);

export default connect(null, mapDispatchToProps)(HeaderContext);
