import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ShoppingCartDiv = styled.div `
  .title {
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 18px;
    font-weight: 400;
  }
  .item {
    display: flex;
    padding: 20px 30px;
    height: 120px;
  }
  .item:nth-child(3) {
    border-top: 1px solid #E1E8EE;
    border-bottom: 1px solid #E1E8EE;
  }
  .buttons {
    position: relative;
    padding-top: 30px;
    margin-right: 60px;
  }
  .is-active {
    animation-name: animate;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-timing-function: steps(28);
    animation-fill-mode: forwards;
    background-position: left;
  }
  .image {
    margin-right: 100px;
    margin-left: 150px;
  }
 .description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
  }

  .description span {
    display: block;
    font-size: 14px;
    color: #43484D;
    font-weight: 400;
  }

  .description span:first-child {
    margin-bottom: 5px;
  }
  .description span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }
  .quantity {
    padding-top: 20px;
    margin-right: 60px;
  }
  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  button[class*=btn] {
    width: 30px;
    height: 30px;
    background-color: #E1E8EE;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  .minus-btn img {
    margin-bottom: 3px;
  }
  .plus-btn img {
    margin-top: 2px;
  }

  button:focus,
  input:focus {
    outline:0;
  }
  .total-price {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .item {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
    .image img {
      width: 50%;
    }
    .image,
    .quantity,
    .description {
      width: 100%;
      text-align: center;
      margin: 6px 0;
    }
    .buttons {
      margin-right: 20px;
    }
  }
`

class ShoppingCart extends Component {
  render() {
    const { cartProducts } = this.props;
    console.log('products: ', cartProducts)
    return (
      <ShoppingCartDiv>
        <div className="title">
          Shopping Cart
        </div>
        {cartProducts.map((product, id) => {
          return (
            <div key={id} className="item">
              <div className="image">
                <img src={product.image} alt={product.name} height="100" />
              </div>
              <div className="description">
                <span>{product.name}</span>
                <span>{product.color}</span>
              </div>
              <div className="quantity">
                <i className="fa fa-minus" aria-hidden="true"></i>
                <input type="text" name="name" defaultValue={1} />
                <i className="fa fa-plus" aria-hidden="true"></i>
              </div>
              <div className="total-price">{product.regular_price}</div>
              <div className="buttons">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </div>
            </div>
          )
        })}

      </ShoppingCartDiv>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.shoppingCart.products
})

export default connect(mapStateToProps)(ShoppingCart);
