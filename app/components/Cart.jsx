import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="cart-container">
                <p>Cart component</p>
                <i className="fa fa-window-close" aria-hidden="true" onClick={() => this.props.onToggleCart()}></i>
            </div>
        );
    }
}

export default Cart;