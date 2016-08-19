import React from 'react';

export default class ProductBox extends React.Component {
  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    product: React.PropTypes.object.isRequired
  };

  render() {
    const cart = this.props.cart;
    const product = this.props.product;
    const output = {};

    console.log(product);

    if (product.on_sale) {
      output.sale = (
        <div className="app__box__sale">
          <div>{product.regular_price}</div>
          <div>({product.discount_percentage} off)</div>
        </div>
      );
    }

    return (
      <div className="app__box">
        <div
          className="app__box__image">
          {product.image ? (<img src={product.image} alt={product.name} />) : (<div>{product.name}</div>)}
        </div>
        <div className="app__box__body">
          <h3>{product.name}</h3>
          <div className="app__box__price">
            <div>{product.actual_price}</div>
            <div>{product.installments}</div>
          </div>
          {output.sale}
        </div>
      </div>
    );
  }
}
