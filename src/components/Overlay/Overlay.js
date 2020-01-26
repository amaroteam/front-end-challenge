import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FilterActionsCreator } from '../../store/ducks/filter';
import { Creators as OverlayActionsCreator } from '../../store/ducks/overlay';

import '../../styles/components/Overlay.scss';

const Overlay = ({
  className = '',
  onKeyDown,
  onKeyPress,
  onKeyUp,
  ariaLabel,
  tabIndex,
  toggle,
  filterActions,
  overlayActions,
}) => {
  const { toggleFilter } = filterActions;
  const { toggleOverlay } = overlayActions;

  const handleCloseAll = () => {
    toggleFilter(false);
    toggleOverlay(false);
  };
  return (
    <div
      className={`am-overlay ${className} ${
        toggle ? 'is--active' : ''
      }`}
      onClick={() => handleCloseAll()}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      role="button"
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    />
  );
};

const mapStateToProps = state => ({
  toggle: state.overlay,
});

const mapDispatchToProps = dispatch => ({
  filterActions: bindActionCreators(FilterActionsCreator, dispatch),
  overlayActions: bindActionCreators(OverlayActionsCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
