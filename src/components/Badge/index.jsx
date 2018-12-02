import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({ discount }) => (
  <span className="badge badge--discount">
    {`-${discount}`}
  </span>
);

Badge.propTypes = {
  discount: PropTypes.string,
};

Badge.defaultProps = {
  discount: '',
};

export default Badge;
