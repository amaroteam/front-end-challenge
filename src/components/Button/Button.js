import React from 'react';

const Button = ({ children, role, onClick, className, onSubmit }) => (
  <button
    className={className}
    type="button"
    role={role}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {children}
  </button>
);

export default Button;
