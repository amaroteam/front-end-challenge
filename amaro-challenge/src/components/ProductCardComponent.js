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
  .old-price {
    display: block;
    text-decoration: line-through;
    margin: 10px;
  }
  .sizes {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

  }
  .sizeCircle {
    border-radius: 50%;
    width: 30px;
    font-size: 32px;
    border: 1px solid #ccc;
    margin: 5px;
    cursor: pointer;
  }
  .sizeChosen {
    background-color: #000;
  }
  .sizeCircle span {
    display: block;
    color: #000;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
  }
`

class ProductCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sizeChosen: null
    }
  }

  componentDidMount() {
    if (this.props.product.sizes.length === 1) {
      this.setState({ sizeChosen: this.props.product.sizes[0] })
    }
  }

  handleSizeChosen = (sizeChosen) => {
    console.log('handle size change')
    this.setState({ sizeChosen })
  }
  render() {
    const { product } = this.props;

    return (
      <ProductDiv>
        <div>
          <img src={product.image} alt={`Acessar o produto ${product.name}`} />
          <h4>{product.name}</h4>
          <div className="price">
            {product.regular_price !== product.actual_price ?
              <span className="old-price">{product.regular_price}</span> : null
            }
            <span className="regular-price">{product.actual_price}</span>
            <span className="installments">{product.installments}</span>
            <div className="sizes">
              {product.sizes.map(size => {
                return (
                  <div key={size.size} className="sizeCircle" style={this.state.sizeChosen === size ? { backgroundColor: " #000"} : null}>
                    <span style={this.state.sizeChosen === size ? {color: "#ccc"} : null} onClick={() => this.handleSizeChosen(size)}>{size.size}</span>
                  </div>
                )
              })}
            </div>
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
