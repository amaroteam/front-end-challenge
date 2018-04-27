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

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _StepIcon = require('./StepIcon');

var _StepIcon2 = _interopRequireDefault(_StepIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      '&$alternativeLabel': {
        flexDirection: 'column'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },
    horizontal: {},
    vertical: {},
    active: {},
    completed: {},
    alternativeLabel: {},
    error: {},
    disabled: {},
    label: {
      color: theme.palette.text.secondary,
      '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: theme.spacing.unit * 2
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },
    iconContainer: {
      paddingRight: theme.spacing.unit,
      '&$alternativeLabel': {
        paddingRight: 0
      }
    },
    labelContainer: {
      width: '100%'
    }
  };
};

function StepLabel(props) {
  var _classNames, _classNames3;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'error', 'icon', 'last', 'optional', 'orientation']);


  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.alternativeLabel, alternativeLabel), (0, _defineProperty3.default)(_classNames, classes.error, error), _classNames), classNameProp)
    }, other),
    icon && _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)(classes.iconContainer, (0, _defineProperty3.default)({}, classes.alternativeLabel, alternativeLabel))
      },
      _react2.default.createElement(_StepIcon2.default, {
        completed: completed,
        active: active,
        error: error,
        icon: icon,
        alternativeLabel: alternativeLabel
      })
    ),
    _react2.default.createElement(
      'span',
      { className: classes.labelContainer },
      _react2.default.createElement(
        _Typography2.default,
        {
          variant: 'body1',
          component: 'span',
          className: (0, _classnames2.default)(classes.label, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.alternativeLabel, alternativeLabel), (0, _defineProperty3.default)(_classNames3, classes.completed, completed), (0, _defineProperty3.default)(_classNames3, classes.active, active), (0, _defineProperty3.default)(_classNames3, classes.error, error), _classNames3))
        },
        children
      ),
      optional
    )
  );
}

StepLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * In most cases will simply be a string containing a title for the label.
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
   * @ignore
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Mark the step as failed.
   */
  error: _propTypes2.default.bool,
  /**
   * Override the default icon.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * The optional node to display.
   */
  optional: _propTypes2.default.node,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  error: false,
  last: false,
  orientation: 'horizontal'
};

StepLabel.muiName = 'StepLabel';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepLabel' })(StepLabel);