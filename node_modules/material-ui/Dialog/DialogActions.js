'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactHelpers = require('../utils/reactHelpers');

require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// So we don't have any override priority issue.

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      flex: '0 0 auto',
      margin: theme.spacing.unit + 'px ' + theme.spacing.unit / 2 + 'px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    action: {
      margin: '0 ' + theme.spacing.unit / 2 + 'px',
      minWidth: 64
    }
  };
};

function DialogActions(props) {
  var disableActionSpacing = props.disableActionSpacing,
      children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['disableActionSpacing', 'children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    disableActionSpacing ? children : (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action)
  );
}

DialogActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
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
   * If `true`, the dialog actions do not have additional margin.
   */
  disableActionSpacing: _propTypes2.default.bool
} : {};

DialogActions.defaultProps = {
  disableActionSpacing: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogActions' })(DialogActions);