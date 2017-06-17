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
    width: auto;
    max-height: 330px
  }
  h4 {
    font-weight:100;
    color: #292b2c;
    text-align: center;
  }
  .price {
    text-align: center;
    font-size: 12px;
    height: 100px;
  }
  .regular-price {
    font-weight: bold;
    margin-top: 50px;
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

  .addToCard {
    cursor: pointer;
  }
  .addToCard span {
    display: flow;
    background-color: #000;
    text-transform: uppercase;
    color: #ccc;
    border: .1px solid #000;
    justify-content: center;
    margin: 10px;
    padding: 5px;
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
    this.setState({ sizeChosen })
  }

  render() {
    const { product } = this.props;

    return (
      <ProductDiv>
        <div>
          {product.image ?
            <img src={product.image} alt={product.name} /> :
            <div style={{margin: 60, marginTop: 135, marginBottom: 200, fontSize: 18}}>Image not available :(</div>
          }

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
                  <div key={size.size} className="sizeCircle"
                       style={this.state.sizeChosen === size ? { backgroundColor: " #000"} : null}>
                    <span style={this.state.sizeChosen === size ? {color: "#ccc"} : null}
                          onClick={() => this.handleSizeChosen(size)}>{size.size}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="addToCard">
            <span onClick={() => this.props.addProductToCart(product, 1)}>Add to cart</span>
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
