import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import SvgIcon from '../SvgIcon';

export const styles = theme => ({
  root: {
    color: theme.palette.text.disabled
  },
  text: {
    fill: theme.palette.primary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.fontFamily
  }
});

/**
 * @ignore - internal component.
 */

var _ref = React.createElement('circle', { cx: '12', cy: '12', r: '12' });

function StepPositionIcon(props) {
  const { position, classes, className } = props;

  return React.createElement(
    SvgIcon,
    { className: classNames(classes.root, className) },
    _ref,
    React.createElement(
      'text',
      { className: classes.text, x: '12', y: '16', textAnchor: 'middle' },
      position
    )
  );
}

StepPositionIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The step position as a number.
   */
  position: PropTypes.node
} : {};

export default withStyles(styles)(StepPositionIcon);