'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: 'hidden'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};

function Icon(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color']);


  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({
      className: (0, _classnames2.default)('material-icons', classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), className),
      'aria-hidden': 'true'
    }, other),
    children
  );
}

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['inherit', 'secondary', 'action', 'disabled', 'error', 'primary'])
} : {};

Icon.defaultProps = {
  color: 'inherit'
};

Icon.muiName = 'Icon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiIcon' })(Icon);