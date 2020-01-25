import React from 'react';

import '../../styles/layout/Container.scss';

const Container = ({ children, className = '' }) => (
  <div className={`am-container ${className}`}>{children}</div>
);

export default Container;
