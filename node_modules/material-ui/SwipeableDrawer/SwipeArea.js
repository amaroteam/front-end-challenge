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

var _Drawer = require('../Drawer/Drawer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      zIndex: theme.zIndex.drawer - 1
    },
    discoveryAnchorLeft: {
      right: 'auto'
    },
    discoveryAnchorRight: {
      left: 'auto',
      right: 0
    },
    discoveryAnchorTop: {
      bottom: 'auto',
      right: 0
    },
    discoveryAnchorBottom: {
      top: 'auto',
      bottom: 0,
      right: 0
    }
  };
};

/**
 * @ignore - internal component.
 */
function SwipeArea(props) {
  var anchor = props.anchor,
      classes = props.classes,
      swipeAreaWidth = props.swipeAreaWidth,
      other = (0, _objectWithoutProperties3.default)(props, ['anchor', 'classes', 'swipeAreaWidth']);


  return _react2.default.createElement('div', (0, _extends3.default)({
    className: (0, _classnames2.default)(classes.root, classes['discoveryAnchor' + (0, _helpers.capitalize)(anchor)]),
    style: (0, _defineProperty3.default)({}, (0, _Drawer.isHorizontal)(props) ? 'width' : 'height', swipeAreaWidth)
  }, other));
}

SwipeArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Side on which to attach the discovery area.
   */
  anchor: _propTypes2.default.oneOf(['left', 'top', 'right', 'bottom']).isRequired,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: _propTypes2.default.number.isRequired
} : {};

exports.default = (0, _withStyles2.default)(styles)(SwipeArea);