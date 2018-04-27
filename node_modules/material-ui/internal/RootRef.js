'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 *
 * Internal helper component to allow attaching a ref to a
 * child element that may not accept refs (functional component).
 * It's higly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801
 */
var RootRef = function (_React$Component) {
  (0, _inherits3.default)(RootRef, _React$Component);

  function RootRef() {
    (0, _classCallCheck3.default)(this, RootRef);
    return (0, _possibleConstructorReturn3.default)(this, (RootRef.__proto__ || (0, _getPrototypeOf2.default)(RootRef)).apply(this, arguments));
  }

  (0, _createClass3.default)(RootRef, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.rootRef(_reactDom2.default.findDOMNode(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.rootRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return RootRef;
}(_react2.default.Component);

RootRef.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element.isRequired,
  rootRef: _propTypes2.default.func.isRequired
} : {};

exports.default = RootRef;