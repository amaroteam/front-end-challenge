import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Drawer from '../Drawer';

import './App.scss';

const App = ({ children, isDrawerVisible }) => (
  <div className={`app ${isDrawerVisible ? 'app--is-drawer-visible' : ''}`}>
    {children}

    <Drawer />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  isDrawerVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  isDrawerVisible: store.drawer.isDrawerVisible,
});

export default withRouter(connect(mapStateToProps)(App));
