import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import keycode from 'keycode';
import warning from 'warning';
import ArrowDropDownIcon from '../internal/svg-icons/ArrowDropDown';
import Menu from '../Menu/Menu';
import { isFilled } from '../Input/Input';

/**
 * @ignore - internal component.
 */
class SelectInput extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      open: false
    }, this.ignoreNextBlur = false, this.displayNode = null, this.displayWidth = null, this.isOpenControlled = this.props.open !== undefined, this.isControlled = this.props.value != null, this.updateDisplayWidth = () => {
      // Perfom the layout computation outside of the render method.
      if (this.displayNode) {
        this.displayWidth = this.displayNode.clientWidth;
      }
    }, this.update = this.isOpenControlled ? ({ event, open }) => {
      if (open) {
        this.props.onOpen(event);
      } else {
        this.props.onClose(event);
      }
    } : ({ open }) => this.setState({ open }), this.handleClick = event => {
      // Opening the menu is going to blur the. It will be focused back when closed.
      this.ignoreNextBlur = true;
      this.update({
        open: true,
        event
      });
    }, this.handleClose = event => {
      this.update({
        open: false,
        event
      });
    }, this.handleItemClick = child => event => {
      if (!this.props.multiple) {
        this.update({
          open: false,
          event
        });
      }

      const { onChange, name } = this.props;

      if (onChange) {
        let value;
        let target;

        if (event.target) {
          target = event.target;
        }

        if (this.props.multiple) {
          value = Array.isArray(this.props.value) ? [...this.props.value] : [];
          const itemIndex = value.indexOf(child.props.value);
          if (itemIndex === -1) {
            value.push(child.props.value);
          } else {
            value.splice(itemIndex, 1);
          }
        } else {
          value = child.props.value;
        }

        event.persist();
        event.target = _extends({}, target, { value, name });

        onChange(event, child);
      }
    }, this.handleBlur = event => {
      if (this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        this.ignoreNextBlur = false;
        return;
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }, this.handleKeyDown = event => {
      if (this.props.readOnly) {
        return;
      }

      if (['space', 'up', 'down'].indexOf(keycode(event)) !== -1) {
        event.preventDefault();
        // Opening the menu is going to blur the. It will be focused back when closed.
        this.ignoreNextBlur = true;
        this.update({
          open: true,
          event
        });
      }
    }, this.handleDisplayRef = node => {
      this.displayNode = node;
      this.updateDisplayWidth();
    }, this.handleSelectRef = node => {
      if (!this.props.inputRef) {
        return;
      }

      this.props.inputRef({
        node,
        // By pass the native input as we expose a rich object (array).
        value: this.props.value
      });
    }, _temp;
  }

  componentDidMount() {
    if (this.isOpenControlled && this.props.open) {
      // Focus the display node so the focus is restored on this element once
      // the menu is closed.
      this.displayNode.focus();
      // Rerender with the resolve `displayNode` reference.
      this.forceUpdate();
    }

    if (this.props.autoFocus && !this.props.native) {
      this.displayNode.focus();
    }
  }

  shouldComponentUpdate() {
    this.updateDisplayWidth();

    return true;
  }

  render() {
    const _props = this.props,
          {
      autoWidth,
      children,
      classes,
      className: classNameProp,
      disabled,
      displayEmpty,
      inputRef,
      MenuProps = {},
      multiple,
      name,
      native,
      onBlur,
      onChange,
      onClose,
      onFocus,
      onOpen,
      open: openProp,
      readOnly,
      renderValue,
      SelectDisplayProps,
      tabIndex: tabIndexProp,
      type = 'hidden',
      value
    } = _props,
          other = _objectWithoutProperties(_props, ['autoWidth', 'children', 'classes', 'className', 'disabled', 'displayEmpty', 'inputRef', 'MenuProps', 'multiple', 'name', 'native', 'onBlur', 'onChange', 'onClose', 'onFocus', 'onOpen', 'open', 'readOnly', 'renderValue', 'SelectDisplayProps', 'tabIndex', 'type', 'value']);
    const open = this.isOpenControlled && this.displayNode ? openProp : this.state.open;

    if (native) {
      process.env.NODE_ENV !== "production" ? warning(multiple === false, 'Material-UI: you can not use the `native={true}` and `multiple={true}` properties ' + 'at the same time on a `Select` component.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!renderValue, 'Material-UI: the `renderValue` property is not used by the native implementation.') : void 0;
      process.env.NODE_ENV !== "production" ? warning(!displayEmpty, 'Material-UI: the `displayEmpty` property is not used by the native implementation.') : void 0;

      return React.createElement(
        'div',
        { className: classes.root },
        React.createElement(
          'select',
          _extends({
            className: classNames(classes.select, {
              [classes.disabled]: disabled
            }, classNameProp),
            name: name,
            disabled: disabled,
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
            value: value,
            readOnly: readOnly,
            ref: inputRef
          }, other),
          children
        ),
        React.createElement(ArrowDropDownIcon, { className: classes.icon })
      );
    }

    if (!this.isControlled) {
      throw new Error('Material-UI: the `value` property is required ' + 'when using the `Select` component with `native=false` (default).');
    }

    let display;
    let displaySingle = '';
    const displayMultiple = [];
    let computeDisplay = false;

    // No need to display any value if the field is empty.
    if (isFilled(this.props) || displayEmpty) {
      if (renderValue) {
        display = renderValue(value);
      } else {
        computeDisplay = true;
      }
    }

    const items = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }
      let selected;

      if (multiple) {
        if (!Array.isArray(value)) {
          throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
        }

        selected = value.indexOf(child.props.value) !== -1;
        if (selected && computeDisplay) {
          displayMultiple.push(child.props.children);
        }
      } else {
        selected = value === child.props.value;
        if (selected && computeDisplay) {
          displaySingle = child.props.children;
        }
      }

      return React.cloneElement(child, {
        onClick: this.handleItemClick(child),
        role: 'option',
        selected,
        value: undefined, // The value is most likely not a valid HTML attribute.
        'data-value': child.props.value // Instead, we provide it as a data attribute.
      });
    });

    if (computeDisplay) {
      display = multiple ? displayMultiple.join(', ') : displaySingle;
    }

    const MenuMinWidth = this.displayNode && !autoWidth ? this.displayWidth : undefined;

    let tabIndex;
    if (typeof tabIndexProp !== 'undefined') {
      tabIndex = tabIndexProp;
    } else {
      tabIndex = disabled ? null : 0;
    }

    return React.createElement(
      'div',
      { className: classes.root },
      React.createElement(
        'div',
        _extends({
          className: classNames(classes.select, classes.selectMenu, {
            [classes.disabled]: disabled
          }, classNameProp),
          ref: this.handleDisplayRef,

          'aria-pressed': open ? 'true' : 'false',
          tabIndex: tabIndex,
          role: 'button',
          'aria-owns': open ? `menu-${name || ''}` : null,
          'aria-haspopup': 'true',
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur,
          onClick: disabled || readOnly ? null : this.handleClick,
          onFocus: onFocus
        }, SelectDisplayProps),
        display || React.createElement('span', { dangerouslySetInnerHTML: { __html: '&#8203' } })
      ),
      React.createElement('input', _extends({
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        readOnly: readOnly,
        ref: this.handleSelectRef,
        type: type
      }, other)),
      React.createElement(ArrowDropDownIcon, { className: classes.icon }),
      React.createElement(
        Menu,
        _extends({
          id: `menu-${name || ''}`,
          anchorEl: this.displayNode,
          open: open,
          onClose: this.handleClose
        }, MenuProps, {
          MenuListProps: _extends({
            role: 'listbox'
          }, MenuProps.MenuListProps),
          PaperProps: _extends({}, MenuProps.PaperProps, {
            style: _extends({
              minWidth: MenuMinWidth
            }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
          })
        }),
        items
      )
    );
  }
}

SelectInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  autoFocus: PropTypes.bool,
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: PropTypes.bool,
  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: PropTypes.func,
  /**
   * Properties applied to the `Menu` element.
   */
  MenuProps: PropTypes.object,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   * You can only use it when the `native` property is `false` (default).
   */
  multiple: PropTypes.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: PropTypes.bool,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Useful in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component requests to be opened.
   * Useful in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: PropTypes.func,
  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: PropTypes.bool,
  /**
   * @ignore
   */
  readOnly: PropTypes.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: PropTypes.func,
  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))])
} : {};

export default SelectInput;