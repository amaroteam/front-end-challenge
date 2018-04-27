'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _KeyboardArrowLeft = require('../internal/svg-icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('../internal/svg-icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref2 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

var _ref3 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref4 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref5 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

var TablePaginationActions = function (_React$Component) {
  (0, _inherits3.default)(TablePaginationActions, _React$Component);

  function TablePaginationActions() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TablePaginationActions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TablePaginationActions.__proto__ || (0, _getPrototypeOf2.default)(TablePaginationActions)).call.apply(_ref, [this].concat(args))), _this), _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    }, _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TablePaginationActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backIconButtonProps = _props.backIconButtonProps,
          count = _props.count,
          nextIconButtonProps = _props.nextIconButtonProps,
          onChangePage = _props.onChangePage,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['backIconButtonProps', 'count', 'nextIconButtonProps', 'onChangePage', 'page', 'rowsPerPage', 'theme']);


      return _react2.default.createElement(
        'div',
        other,
        _react2.default.createElement(
          _IconButton2.default,
          (0, _extends3.default)({
            onClick: this.handleBackButtonClick,
            disabled: page === 0
          }, backIconButtonProps),
          theme.direction === 'rtl' ? _ref2 : _ref3
        ),
        _react2.default.createElement(
          _IconButton2.default,
          (0, _extends3.default)({
            onClick: this.handleNextButtonClick,
            disabled: page >= Math.ceil(count / rowsPerPage) - 1
          }, nextIconButtonProps),
          theme.direction === 'rtl' ? _ref4 : _ref5
        )
      );
    }
  }]);
  return TablePaginationActions;
}(_react2.default.Component);

TablePaginationActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Properties applied to the back arrow `IconButton` element.
   */
  backIconButtonProps: _propTypes2.default.object,
  /**
   * The total number of rows.
   */
  count: _propTypes2.default.number.isRequired,
  /**
   * Properties applied to the next arrow `IconButton` element.
   */
  nextIconButtonProps: _propTypes2.default.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: _propTypes2.default.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: _propTypes2.default.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: _propTypes2.default.number.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

exports.default = (0, _withTheme2.default)()(TablePaginationActions);