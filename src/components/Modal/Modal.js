import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as OverlayActionsCreator } from '../../store/ducks/overlay';
import { Creators as QuickViewActionsCreator } from '../../store/ducks/quickview';

import '../../styles/components/Modal.scss';

import Button from '../Button';

const Modal = ({
  children,
  className,
  overlayActions,
  quickViewActions,
}) => {
  const { toggleOverlay } = overlayActions;
  const {
    toggleQuickView,
    sizeProductQuickView,
    errorSizeBullets,
  } = quickViewActions;

  const handleClose = () => {
    toggleOverlay(false);
    toggleQuickView(false);
    errorSizeBullets(false);
    sizeProductQuickView(false);
  };
  return (
    <div className={`am-modal ${className}`}>
      <Button
        className="am-modal__close"
        onClick={() => handleClose()}
      />
      {children}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  overlayActions: bindActionCreators(OverlayActionsCreator, dispatch),
  quickViewActions: bindActionCreators(
    QuickViewActionsCreator,
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(Modal);
