import React, { Component } from 'react';

import CartRow from './CartRow.jsx';

class Cart extends Component {
    render() {
        var {cart, cartValue} = this.props;

        var renderCartRows = () => {
            return cart.map((cartItem, index) => {
                return (
                    <div className="text-center" key={index}>
                        <CartRow key={index} {...cartItem} onChangeCartItemQuantity={this.props.onChangeCartItemQuantity} onRemoveCartItem={this.props.onRemoveCartItem} />   
                    </div>
                )
            })
        }

        return (
            <div className="cart-container">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h2>Carrinho</h2>
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => this.props.onToggleCart()}></i>
                    </div>
                </div>                
                {renderCartRows()}
                <div className="row cart-total-value">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                        <p>Total: R$ {cartValue.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;