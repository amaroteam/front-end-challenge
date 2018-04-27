'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = require('react-popper');

var _helpers = require('../utils/helpers');

var _RootRef = require('../internal/RootRef');

var _RootRef2 = _interopRequireDefault(_RootRef);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _common = require('../colors/common');

var _common2 = _interopRequireDefault(_common);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    // Will be gone once we drop React 15.x support.
    root: {
      display: 'inline-block',
      flexDirection: 'inherit' // Makes the wrapper more transparent.
    },
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none',
      '&$open': {
        pointerEvents: 'auto'
      }
    },
    open: {},
    tooltip: {
      backgroundColor: theme.palette.grey[700],
      borderRadius: 2,
      color: _common2.default.white,
      fontFamily: theme.typography.fontFamily,
      opacity: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn
      }),
      minHeight: 0,
      padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit + 'px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: theme.typography.round(14 / 10) + 'em',
      '&$open': {
        opacity: 0.9,
        transform: 'scale(1)',
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeOut
        })
      }
    },
    touch: {
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.round(16 / 14) + 'em'
    },
    tooltipPlacementLeft: (0, _defineProperty3.default)({
      transformOrigin: 'right center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementRight: (0, _defineProperty3.default)({
      transformOrigin: 'left center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementTop: (0, _defineProperty3.default)({
      transformOrigin: 'center bottom',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipPlacementBottom: (0, _defineProperty3.default)({
      transformOrigin: 'center top',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
}; /* eslint-disable react/no-multi-comp, no-underscore-dangle */

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

var Tooltip = function (_React$Component) {
  (0, _inherits3.default)(Tooltip, _React$Component);

  function Tooltip(props, context) {
    (0, _classCallCheck3.default)(this, Tooltip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, props, context));

    _this.state = {};
    _this.enterTimer = null;
    _this.leaveTimer = null;
    _this.touchTimer = null;
    _this.closeTimer = null;
    _this.isControlled = null;
    _this.popper = null;
    _this.children = null;
    _this.ignoreNonTouchEvents = false;
    _this.handleResize = (0, _debounce2.default)(function () {
      if (_this.popper) {
        _this.popper._popper.scheduleUpdate();
      }
    }, 166);

    _this.handleEnter = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          enterDelay = _this$props.enterDelay;

      var childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);
      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      if (!_this.isControlled) {
        _this.setState({ open: true });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event, true);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          leaveDelay = _this$props2.leaveDelay;

      var childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);
      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      if (!_this.isControlled) {
        _this.setState({ open: false });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, false);
      }

      clearTimeout(_this.closeTimer);
      _this.closeTimer = setTimeout(function () {
        _this.ignoreNonTouchEvents = false;
      }, _this.props.theme.transitions.duration.shortest);
    };

    _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          enterTouchDelay = _this$props3.enterTouchDelay;

      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(_this.leaveTimer);
      clearTimeout(_this.closeTimer);
      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleEnter(event);
      }, enterTouchDelay);
    };

    _this.handleTouchEnd = function (event) {
      var _this$props4 = _this.props,
          children = _this$props4.children,
          leaveTouchDelay = _this$props4.leaveTouchDelay;

      var childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.handleClose(event);
      }, leaveTouchDelay);
    };

    _this.isControlled = props.open != null;
    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.open = false;
    }
    return _this;
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n')) : void 0;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      clearTimeout(this.touchTimer);
      clearTimeout(this.closeTimer);
      this.handleResize.cancel();
    } // Corresponds to 10 frames at 60 Hz.

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableFocusListener = _props.disableFocusListener,
          disableHoverListener = _props.disableHoverListener,
          disableTouchListener = _props.disableTouchListener,
          enterDelay = _props.enterDelay,
          enterTouchDelay = _props.enterTouchDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          leaveTouchDelay = _props.leaveTouchDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          placementProp = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === undefined ? {} : _props$PopperProps;
      var PopperClassName = _props$PopperProps.className,
          PopperProps = (0, _objectWithoutProperties3.default)(_props$PopperProps, ['className']),
          theme = _props.theme,
          title = _props.title,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'disableFocusListener', 'disableHoverListener', 'disableTouchListener', 'enterDelay', 'enterTouchDelay', 'id', 'leaveDelay', 'leaveTouchDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'title']);


      var placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = { 'aria-describedby': id };

      // There is no point at displaying an empty tooltip.
      if (title === '') {
        open = false;
      }

      if (!disableTouchListener) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableHoverListener) {
        childrenProps.onMouseOver = this.handleEnter;
        childrenProps.onMouseLeave = this.handleLeave;
      }

      if (!disableFocusListener) {
        childrenProps.onFocus = this.handleEnter;
        childrenProps.onBlur = this.handleLeave;
      }

      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!children.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', 'Remove this title property `' + children.props.title + '` or the Tooltip component.'].join('\n')) : void 0;

      return _react2.default.createElement(
        _reactPopper.Manager,
        (0, _extends3.default)({
          tag: _reactDom2.default.createPortal ? false : 'div',
          className: (0, _classnames2.default)(classes.root, className)
        }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement(
          _reactPopper.Target,
          null,
          function (_ref) {
            var targetProps = _ref.targetProps;
            return _react2.default.createElement(
              _RootRef2.default,
              {
                rootRef: function rootRef(node) {
                  _this2.children = node;
                  targetProps.ref(_this2.children);
                }
              },
              _react2.default.cloneElement(children, childrenProps)
            );
          }
        ),
        _react2.default.createElement(
          _Portal2.default,
          null,
          _react2.default.createElement(
            _reactPopper.Popper,
            (0, _extends3.default)({
              placement: placement,
              eventsEnabled: open,
              className: (0, _classnames2.default)(classes.popper, (0, _defineProperty3.default)({}, classes.open, open), PopperClassName),
              ref: function ref(node) {
                _this2.popper = node;
              }
            }, PopperProps),
            function (_ref2) {
              var popperProps = _ref2.popperProps,
                  restProps = _ref2.restProps;

              var actualPlacement = (popperProps['data-placement'] || placement).split('-')[0];
              return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, popperProps, restProps, {
                  style: (0, _extends3.default)({}, popperProps.style, {
                    top: popperProps.style.top || 0,
                    left: popperProps.style.left || 0
                  }, restProps.style)
                }),
                _react2.default.createElement(
                  'div',
                  {
                    id: id,
                    role: 'tooltip',
                    'aria-hidden': !open,
                    className: (0, _classnames2.default)(classes.tooltip, (0, _defineProperty3.default)({}, classes.open, open), (0, _defineProperty3.default)({}, classes.touch, _this2.ignoreNonTouchEvents), classes['tooltipPlacement' + (0, _helpers.capitalize)(actualPlacement)])
                  },
                  title
                )
              );
            }
          )
        )
      );
    }
  }]);
  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Tooltip reference element.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Do not respond to focus events.
   */
  disableFocusListener: _propTypes2.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener: _propTypes2.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: _propTypes2.default.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: _propTypes2.default.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes2.default.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: _propTypes2.default.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: _propTypes2.default.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes2.default.bool,
  /**
   * Tooltip placement
   */
  placement: _propTypes2.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: _propTypes2.default.node.isRequired
} : {};

Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);