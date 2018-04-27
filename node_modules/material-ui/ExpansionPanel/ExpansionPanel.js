'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Collapse = require('../transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Workaround https://github.com/jsdom/jsdom/issues/2026
var edgeFix = typeof window !== 'undefined' && /jsdom/.test(window.navigator.userAgent) ? {} : {
  // Fix a rendering issue on Edge
  '@supports (-ms-ime-align: auto)': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
}; // @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };

  return {
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': (0, _extends3.default)({
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      }, edgeFix),
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    expanded: {
      margin: theme.spacing.unit * 2 + 'px 0',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
};

var ExpansionPanel = function (_React$Component) {
  (0, _inherits3.default)(ExpansionPanel, _React$Component);

  function ExpansionPanel(props, context) {
    (0, _classCallCheck3.default)(this, ExpansionPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExpansionPanel.__proto__ || (0, _getPrototypeOf2.default)(ExpansionPanel)).call(this, props, context));

    _this.state = {};
    _this.isControlled = null;

    _this.handleChange = function (event) {
      var expanded = _this.isControlled ? _this.props.expanded : _this.state.expanded;

      if (!_this.isControlled) {
        _this.setState({ expanded: !expanded });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, !expanded);
      }
    };

    _this.isControlled = props.expanded != null;
    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.expanded = props.defaultExpanded !== undefined ? props.defaultExpanded : false;
    }
    return _this;
  }

  (0, _createClass3.default)(ExpansionPanel, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          CollapsePropsProp = _props.CollapseProps,
          defaultExpanded = _props.defaultExpanded,
          disabled = _props.disabled,
          expandedProp = _props.expanded,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'CollapseProps', 'defaultExpanded', 'disabled', 'expanded', 'onChange']);

      var expanded = this.isControlled ? expandedProp : this.state.expanded;

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.expanded, expanded), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

      var summary = null;

      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        if ((0, _reactHelpers.isMuiElement)(child, ['ExpansionPanelSummary'])) {
          summary = _react2.default.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });

      var CollapseProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({ className: className, elevation: 1, square: true }, other),
        summary,
        _react2.default.createElement(
          _Collapse2.default,
          (0, _extends3.default)({ 'in': expanded, timeout: 'auto' }, CollapseProps, CollapsePropsProp),
          children
        )
      );
    }
  }]);
  return ExpansionPanel;
}(_react2.default.Component);

ExpansionPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the expansion panel.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Properties applied to the `Collapse` element.
   */
  CollapseProps: _propTypes2.default.object,
  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: _propTypes2.default.bool,
  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: _propTypes2.default.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: _propTypes2.default.func
} : {};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanel' })(ExpansionPanel);