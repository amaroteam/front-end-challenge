import React from 'react';

export default class ProductBox extends React.Component {
  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    onClickProduct: React.PropTypes.func.isRequired,
    product: React.PropTypes.object.isRequired
  };

  render() {
    const props = this.props;
    const cart = this.props.cart;
    const product = this.props.product;
    const output = {};

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
        <a
          href={`/product/${product.id}`}
          onClick={props.onClickProduct}
          data-id={product.id}
          className="app__box__image">
          {product.image ? (<img src={product.image} alt={product.name} />) : (<div>{product.name}</div>)}
        </a>
        <div className="app__box__body">
          <h3>
            <a
              href={`/product/${product.id}`}
              data-id={product.id}
              onClick={props.onClickProduct}>
              {product.name}
            </a>
          </h3>
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
