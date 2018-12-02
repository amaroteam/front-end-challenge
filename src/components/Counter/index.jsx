import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

export const Counter = ({ counter }) => (
  <sup className="counter">
    <span className="counter__value">
      {counter}
    </span>
  </sup>
);

Counter.propTypes = {
  counter: PropTypes.number,
};

Counter.defaultProps = {
  counter: 0,
};

export default Counter;
