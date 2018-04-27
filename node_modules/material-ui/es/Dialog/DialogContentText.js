import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
// @inheritedComponent Typography

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';

export const styles = theme => ({
  root: {
    color: theme.palette.text.secondary
  }
});

function DialogContentText(props) {
  const { children, classes, className } = props,
        other = _objectWithoutProperties(props, ['children', 'classes', 'className']);

  return React.createElement(
    Typography,
    _extends({
      component: 'p',
      variant: 'subheading',
      className: classNames(classes.root, className)
    }, other),
    children
  );
}

DialogContentText.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
} : {};

export default withStyles(styles, { name: 'MuiDialogContentText' })(DialogContentText);