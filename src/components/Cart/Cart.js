import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../../containers/CartItem';

const Cart = ({ items, total, currency, quantity }) => {
    return (
        <div className="cart container">
            <h3>Sacola ({ quantity })</h3>
            <div className="cart-container">
                {items.length > 0 && (
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <CartItem {...item} /> 
                            </li>
                        ))}
                    </ul>
                )}
                {items.length === 0 && (
                    <div className="empty-cart">
                        <h3>SUA SACOLA ESTÁ VAZIA :(</h3>
                        <Link className="bt-buy-more" title="Comprar mais" to="/">Comprar mais</Link>
                    </div>
                )}
            </div>
            <div className="cart__total">
                <p>Total: {currency} {total}</p>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.string,
    currency: PropTypes.string,
    quantity: PropTypes.number
}

export default Cart;
