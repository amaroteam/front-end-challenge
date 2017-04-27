import React, { Component } from 'react';

class CartButton extends Component {
  render() {
    return (
      <button className="btn btn-cart">
        C
        <span className="cart-qtd">12</span>
      </button>
    );
  }
}

export default CartButton;
