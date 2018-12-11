import React from 'react';
import {
  FiSearch,
  FiShoppingBag,
  FiArrowLeft,
  FiPlus,
  FiMinus,
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

export const BackButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiArrowLeft />
    {children}
  </Button>
);

BackButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

BackButton.defaultProps = {
  className: '',
  children: '',
};

export const PlusButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiPlus />
    {children}
  </Button>
);

PlusButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PlusButton.defaultProps = {
  className: '',
  children: '',
};

export const MinusButton = ({ children, ...props }) => (
  <Button {...props}>
    <FiMinus />
    {children}
  </Button>
);

MinusButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

MinusButton.defaultProps = {
  className: '',
  children: '',
};
