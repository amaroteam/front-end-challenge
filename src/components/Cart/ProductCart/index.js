import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumb from './../../Thumb';

class ProductCart extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
    changeProductQuantity: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    };
  }

  handlePlus = () => {
    const { changeProductQuantity } = this.props;
    const { product } = this.state;
    product.quantity = product.quantity + 1;
    changeProductQuantity(product);
  }

  handleMinus = () => {
    const { changeProductQuantity } = this.props;
    const { product } = this.state;
    product.quantity = product.quantity - 1;
    changeProductQuantity(product);
  }

  render() {
    const { removeProduct } = this.props;
    const { product } = this.state;

    return (
      <div className="list-item">
        <div
          className="list-item__del"
          onClick={() => removeProduct(product)}
        >
            Remover
        </div>
        <Thumb
          classes="list-item__thumb"
          src={product.image}
          alt={product.name}
        />
        <div className="list-item__details">
          <p className="title">{product.name}</p>
          <p className="desc">
            {`${product.variant}`} <br />
            Quantidade: {product.quantity}
          </p>
        </div>
        <div className="list-item__price">
          <p>{product.actual_price}</p>
          <div>
            <button onClick={this.handleMinus} disabled={product.quantity === 1 ? true : false} className="change-product-button">-</button>
            <button onClick={this.handlePlus} className="change-product-button">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCart;
