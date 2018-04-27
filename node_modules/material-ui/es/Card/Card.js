import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent Paper

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';

export const styles = {
  root: {
    overflow: 'hidden'
  }
};

function Card(props) {
  const { classes, className, raised } = props,
        other = _objectWithoutProperties(props, ['classes', 'className', 'raised']);

  return React.createElement(Paper, _extends({ className: classNames(classes.root, className), elevation: raised ? 8 : 2 }, other));
}

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
} : {};

Card.defaultProps = {
  raised: false
};

export default withStyles(styles, { name: 'MuiCard' })(Card);