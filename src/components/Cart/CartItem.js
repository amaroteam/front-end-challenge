import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
    handleClick = () => {
        const { id, removeFromCart } = this.props;
        removeFromCart(id);
    }

    render() {
        const { name, actual_price, image } = this.props;
    
        return (
            <div className="cart-item">
                <div className="item-description">
                    <img src={image} className="cart-thumbnail" title={name} alt={name} role="presentation" />
                    <div className="cart-details">
                        <span className="cart-item__name">{name}</span>
                        <span className="cart-item__price">{actual_price}</span>
                    </div>
                </div>
                <button className={'btn-close'} onClick={this.handleClick}>X</button>
            </div>
        );
    }
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    actual_price: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default CartItem;
