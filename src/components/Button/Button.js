import React from 'react';

import '../../styles/components/Button.scss';

const Button = ({
  children,
  role,
  onClick,
  onSubmit,
  disabled,
  variant = '',
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`am-button${variant} ${className}`}
    type="button"
    role={role}
    onClick={onClick}
    onSubmit={onSubmit}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
