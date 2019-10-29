import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import {
  loadCart,
  removeProduct,
  changeProductQuantity
} from "../../api/redux/reducers/cart/actions";
import { updateCart } from "../../api/redux/reducers/total/actions";
import ProductCart from "./ProductCart";

import "./style.scss";

class Cart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
    changeProductQuantity: PropTypes.func,
    productToChange: PropTypes.object
  };

  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }

    if (nextProps.productToChange !== this.props.productToChange) {
      this.changeProductQuantity(nextProps.productToChange);
    }
  }

  openCart = () => {
    this.setState({ isOpen: true });
  };

  closeCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    this.openCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  changeProductQuantity = changedProduct => {
    const { cartProducts, updateCart } = this.props;

    const product = cartProducts.find(p => p.id === changedProduct.id);
    product.quantity = changedProduct.quantity;
    if (product.quantity <= 0) {
      this.removeProduct(product);
    }
    updateCart(cartProducts);
  };

  render() {
    const {
      cartTotal,
      cartProducts,
      removeProduct,
      changeProductQuantity
    } = this.props;

    const products = cartProducts.map(p => {
      return (
        <ProductCart
          product={p}
          removeProduct={removeProduct}
          changeProductQuantity={changeProductQuantity}
          key={p.id}
        />
      );
    });

    let classes = ["cart"];

    if (!!this.state.isOpen) {
      classes.push("cart--open");
    }

    return (
      <div className={classes.join(" ")}>
        {this.state.isOpen && (
          <div
            onClick={() => this.closeCart()}
            className="cart__close-btn"
          >
            X
          </div>
        )}
        {!this.state.isOpen && (
          <span
            onClick={() => this.openCart()}
            className="bag bag--cart-closed"
          >
            <MdShoppingCart/>
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}

        <div className="cart__content">
          <div className="cart__header">
            <span className="header-title">Produtos {cartTotal.productQuantity}</span>
          </div>

          <div className="cart__list-container">
            {products}
            {!products.length && (
              <p className="list-empty">
                Carrinho Vazio<br />
                :(
              </p>
            )}
          </div>

          <div className="cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">{cartTotal.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct, changeProductQuantity }
)(Cart);
