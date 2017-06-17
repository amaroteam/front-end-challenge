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
`

class ProductCard extends Component {
  render() {
    const { product, isOnShoppingCart } = this.props;

    return (
      <ProductDiv>
        <div>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.regular_price}</p>
          <p>{product.installments}</p>
          <button onClick={() => this.props.addProductToCart(product)}>Add to cart</button>
        </div>
        {isOnShoppingCart ?
          <div>
            <h2>Added to cart</h2>
          </div> : null
        }

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
