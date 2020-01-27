import React from 'react';

import '../../styles/components/Button.scss';

const Button = ({
  children,
  role,
  onClick,
  variant,
  onSubmit,
  className = '',
}) => (
  <button
    className={`am-button${variant} ${className}`}
    type="button"
    role={role}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {children}
  </button>
);

export default Button;
