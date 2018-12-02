import React from 'react';
import {
  FiSearch,
  FiShoppingBag,
} from 'react-icons/fi';
import PropTypes from 'prop-types';
import Button from './index';

export const SearchButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiSearch />
    {children}
  </Button>
);

SearchButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SearchButton.defaultProps = {
  className: '',
  children: '',
};

export const CartButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiShoppingBag />
    {children}
  </Button>
);

CartButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CartButton.defaultProps = {
  className: '',
  children: '',
};
