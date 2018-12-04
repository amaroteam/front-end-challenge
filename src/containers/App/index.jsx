import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
