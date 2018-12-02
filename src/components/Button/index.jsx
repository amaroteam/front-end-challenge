import React from 'react';
import Ink from 'react-ink';

const Button = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
    <Ink />
  </button>
);

export default Button;
