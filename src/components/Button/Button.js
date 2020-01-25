import React from 'react';

const Button = ({ children, type, onClick, className, onSubmit }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={className}
    type={type}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {children}
  </button>
);

export default Button;
