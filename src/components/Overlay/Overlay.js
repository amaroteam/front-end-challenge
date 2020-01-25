import React from 'react';

import '../../styles/components/Overlay.scss';

const Overlay = ({ onClick, className = '' }) => (
  <div
    onClick={onClick}
    className={`am-overlay ${className}`}
  />
);

export default Overlay;
