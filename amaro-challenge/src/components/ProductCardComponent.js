import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addProductToCart, removeProductFromCart } from '../actions/shoppingCartActions';

const ProductDiv = styled.div `
  float: left;
  box-shadow: 1px 5px 15px #CCC;
  width: 300px;
  height: 580px;
  border-radius: 3px;
  padding: 10px;
  margin: 30px;
  overflow: hidden;
  position: relative;
  flex: auto;
  img {
    max-width: 100%;
    height: auto
  }
  h4 {
    font-weight:100;
    color: #292b2c;
    text-align: center;
  }
  .price {
    text-align: center;
    font-size: 12px;
  }
  .regular-price {
    font-weight: bold;
    margin: 10px;
  }
  .installments {
    font-weight:100;
    color: #999;
  }
`

class ProductCard extends Component {
  render() {
    const { product, isOnShoppingCart } = this.props;

    return (
      <ProductDiv>
        <div>
          <img src={product.image} alt={`Acessar o produto ${product.name}`} />
          <h4>{product.name}</h4>
          <div className="price">
            <span className="regular-price">{product.regular_price}</span>
            <span className="installments">{product.installments}</span>
          </div>
        </div>

      </ProductDiv>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default connect(null, {
  addProductToCart,
  removeProductFromCart
})(ProductCard);
