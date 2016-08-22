import React from 'react';
import { autobind } from 'core-decorators';
import classNames from 'classnames';
import { shouldComponentUpdate, formatMoney } from 'utils/helpers';

import { toggleCart, showAlert } from 'actions';

import CartItem from 'components/CartItem';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  componentWillReceiveProps(nextProps) {
    if (this.props.cart.visible !== nextProps.cart.visible) {
      $('body')
        .toggleClass('blurify', nextProps.cart.visible)
        .toggleClass('disable-scroll', nextProps.cart.visible);
    }
  }

  @autobind
  onClickClose(e) {
    e.preventDefault();

    this.props.dispatch(toggleCart(false));
  }

  @autobind
  onClickPay(e) {
    e.preventDefault();

    this.props.dispatch(toggleCart(false));
    this.props.dispatch(showAlert('success', 'Compra efetuada com sucesso'));
  }

  render() {
    const props = this.props;
    const cart = props.cart;
    const output = {};

    if (cart.items.length) {
      output.shipping = (
        <div className="app__cart__shipping">
          <span>Frete</span>
          <span>{formatMoney(cart.frete)}</span>
        </div>
      );
    }

    return (
      <div className={classNames('app__cart', { visible: cart.visible })}>
        <a href="#hide" className="app__cart__overlay" onClick={this.onClickClose} />
        <div className="app__cart__wrapper">
          <div className="app__cart__header">
            <h5>Sacola ({cart.items.length})</h5>
            <a href="#close" onClick={this.onClickClose}><i className="i-close" /></a>
          </div>
          <div className="app__cart__body">
            <div className="app__cart__items">
              {cart.items.map((d, i) =>
                (<CartItem key={i} cart={props.cart} data={d} dispatch={props.dispatch} />)
              )}
            </div>
          </div>
          <div className="app__cart__subtotal">
            <span>Subtotal</span>
            <span>{formatMoney(cart.subtotal)}</span>
          </div>
          {output.shipping}
          <div className="app__cart__total">
            <span>Total</span>
            <span>{formatMoney(cart.total)}</span>
          </div>
          <div className="app__cart__actions">
            <a
              href="#more"
              className="btn btn-lg btn-secondary-outline"
              onClick={this.onClickClose}>
              Comprar mais
            </a>
            <a
              href="#pay"
              className="btn btn-lg btn-primary"
              onClick={this.onClickPay}>
              Pagamento
            </a>
          </div>
        </div>
      </div>
    );
  }
}
