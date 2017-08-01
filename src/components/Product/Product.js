import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {

    handleClick = () => {
        const { id, addToCart, isInCart } = this.props;
        if(!isInCart) {
            addToCart(id);
        }
    }

    render() {
        const { name, actual_price, installments, regular_price, image, discount_percentage, isInCart } = this.props;

        return (
            <div className={isInCart ? "product-image disable-image" : "product-image"}>
                <figure className="mdl-card__media" onClick={this.handleClick}>
                    <img src={image} alt={name} title={name} />
                </figure>
                <div className="mdl-card__title">
                    <h1 className="product-title" onClick={this.handleClick}>{name}</h1>
                </div>
                <div className="mdl-card__supporting-text">
                    <p className={`product__price ${regular_price !== actual_price ? 'is-old' : ''}`}>{actual_price}</p>
                    <p className="product__price">{actual_price}</p> 
                    <p className="installments">{installments}</p>
                    {regular_price !== actual_price ?
                            <div>
                                <p className="regular-price">{regular_price}</p>
                                <p className="discount-percentage">({discount_percentage} off)</p>
                            </div>
                        : null
                    } 
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a  onClick={this.handleClick} className="mdl-cell--12-col button-buy mdl-js-button">Comprar</a>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    discount_percentage: PropTypes.string,
    regular_price: PropTypes.string,
    actual_price: PropTypes.string,
    installments: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;

