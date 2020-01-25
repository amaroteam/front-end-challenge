import React from 'react';

import '../../styles/components/Overlay.scss';

const Overlay = ({
  className = '',
  onClick,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  ariaLabel,
  tabIndex,
}) => (
  <div
    className={`am-overlay ${className}`}
    onClick={onClick}
    onKeyDown={onKeyDown}
    onKeyPress={onKeyPress}
    onKeyUp={onKeyUp}
    role="button"
    tabIndex={tabIndex}
    aria-label={ariaLabel}
  />
);

export default Overlay;
