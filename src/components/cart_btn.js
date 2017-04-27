import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCart, hideCart } from '../actions';

import CartList from './cart_list';

class CartButton extends Component {
  onShowClick() {
    if (!this.props.cart.show) {
      this.props.showCart();
    } else {
      this.props.hideCart();
    }    
  }

  render() {
    let cartQtd = '';
    let icon = (
      <svg fill="#ffffff" width="32px" height="32px" className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    );

    if (this.props.cart.items.length > 0 && !this.props.cart.show) {
      cartQtd = <span className="cart-qtd">{this.props.cart.items.length}</span>;
    }

    if (this.props.cart.show) {
      icon = (
        <svg fill="#ffffff" width="32px" height="32px" className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      );
    }

    return (
      <button className="btn btn-cart" onClick={this.onShowClick.bind(this)}>
        {icon}
        {cartQtd}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps, { showCart, hideCart })(CartButton);
