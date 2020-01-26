import React from 'react';

import '../../styles/components/Modal.scss';

import Button from '../Button';

const Modal = ({ children, onClick, className }) => {
  return (
    <div className={`am-modal ${className}`}>
      <Button className="am-modal__close" onClick={onClick} />
      {children}
    </div>
  );
};

export default Modal;
