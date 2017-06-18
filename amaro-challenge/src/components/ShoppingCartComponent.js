import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addProductToCart, removeProductFromCart } from '../actions/shoppingCartActions';


const ShoppingCartDiv = styled.div `
  display: flex;
  flex-direction: column;
  img {
    height: 100px;
  }
  .title {
    height: 60px;
    margin-top: 40px;
    text-align: center;
    border-bottom: 1px solid #E1E8EE;
    color: #292b2c;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .item {
    display: flex;
    justify-content: center;
    padding: 20px 30px;
    height: 120px;
    border-bottom: 1px solid #E1E8EE;
  }
  .buttons {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .image {
    display: flex;
    align-items: center;
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
  .description span:last-child, .description span:nth-child(2) {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }
  .quantity {
    display: flex;
    align-items: center;
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
  .price {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 83px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }
  .total-price {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-bottom: 90px;
    margin-right: 300px;
  }

  @media (max-width: 768px) {
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
      height: auto;
    }
    .image {
      display: block;
      margin-right: 100px;
      margin-left: 150px;
    }
    .quantity {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .image,
    .quantity,
    .description {
      width: 100%;
      text-align: center;
      margin: 6px 0;
    }
    .buttons {
      padding-bottom: 40px;
      padding: 0;
      margin: 0;
      margin-bottom: 20px;
    }
    .total-price {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: 50px;
      margin-top: 40px;
      padding: 0;
    }
  }
`

class ShoppingCart extends Component {
  render() {
    const { cartProducts } = this.props;

    return (
      <ShoppingCartDiv>
        <div className="title">
          Shopping Bag
        </div>
        {cartProducts.map((currProduct, id) => {
          return (
            <div key={id} className="item">
              <div className="buttons">
                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.props.removeProductFromCart(currProduct.product.name, currProduct.size)}></i>
              </div>
              <div className="image">
                <img src={currProduct.product.image} alt={currProduct.product.name} />
              </div>
              <div className="description">
                <span>{currProduct.product.name}</span>
                <span>{`cor: ${currProduct.product.color}`}</span>
                <span>{`tam: ${currProduct.size}`}</span>
              </div>
              <div className="quantity">
                <i style={{cursor: "pointer"}} className="fa fa-minus" aria-hidden="true" onClick={() => this.props.addProductToCart(currProduct.product, -1, currProduct.size)}></i>
                <input type="text" name="name" value={currProduct.quantity} readOnly/>
                <i style={{cursor: "pointer"}} className="fa fa-plus" aria-hidden="true" onClick={() => this.props.addProductToCart(currProduct.product, 1, currProduct.size)}></i>
              </div>
              <div className="price">{currProduct.product.regular_price}</div>
            </div>
          )
        })}
        <div className="total-price">
          Total price: R$ {(cartProducts.reduce((total, currProduct) => {
            const numericalPrice = (Number(currProduct.product.actual_price.replace(/\D/g,'')) / 100).toFixed(2) // converting string to number value
            return total + (currProduct.quantity * numericalPrice)
          }, 0)).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </div>

      </ShoppingCartDiv>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.shoppingCart.products
})

export default connect(mapStateToProps, {
  addProductToCart,
  removeProductFromCart
})(ShoppingCart);
