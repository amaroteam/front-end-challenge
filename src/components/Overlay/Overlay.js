import React from 'react';
import { connect } from 'react-redux';

import '../../styles/components/Overlay.scss';

const Overlay = ({
  className = '',
  onClick,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  ariaLabel,
  tabIndex,
  toggle,
}) => {
  return (
    <div
      className={`am-overlay ${className} ${
        toggle ? 'is--active' : ''
      }`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      role="button"
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    />
  );
};

export default connect(state => ({
  toggle: state.overlay,
}))(Overlay);
