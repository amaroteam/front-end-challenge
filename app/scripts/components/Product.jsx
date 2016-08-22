import React from 'react';
import { autobind } from 'core-decorators';
import classNames from 'classnames';

import { addToCart, toggleCart } from 'actions';
import { parseMoney } from 'utils/helpers';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: undefined,
      sizeError: false
    };
  }

  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    onHideModal: React.PropTypes.func.isRequired,
    product: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    const product = this.props.product;

    if (product.sizes.length === 1) {
      this.setState({
        size: product.sizes[0].size
      });
    }
  }

  @autobind
  onClickSize(e) {
    e.preventDefault();

    const el = e.currentTarget;

    this.setState({
      size: el.innerHTML
    });
  }

  @autobind
  onClickBuy(e) {
    e.preventDefault();
    const state = this.state;

    if (!state.size) {
      return this.setState({
        sizeError: true
      });
    }

    const product = this.props.product;
    const sku = product.sizes.find(d => d.size === state.size).sku;

    return this.props.dispatch(addToCart({
      color: product.color,
      discount_percentage: product.discount_percentage,
      image: product.image,
      name: product.name,
      on_sale: product.on_sale,
      price: parseMoney(product.actual_price),
      quantity: 1,
      size: state.size,
      sku,
      style: product.style
    }))
      .then(() => this.props.onHideModal(() => { this.props.dispatch(toggleCart(true)); }));
  }

  render() {
    const state = this.state;
    const product = this.props.product;
    const output = {};

    if (product.on_sale) {
      output.regular_price = (<div className="app__product__regular-price">{product.regular_price}</div>);
      output.discount = (<div className="app__product__discount">({product.discount_percentage} off)</div>);
    }

    return (
      <div className="app__product">
        <div
          className="app__product__image">
          {product.image ? (<div style={{ backgroundImage: `url('${product.image}')` }} />) : (<span>{product.name}</span>)}
        </div>
        <div className="app__product__body">
          <h3>{product.name}</h3>
          <div className="app__product__price">
            {output.regular_price}
            <div className="app__product__actual_price">{product.actual_price}</div>
            {output.discount}
            <div className="app__product__installments">{product.installments}</div>
          </div>
          <div className="app__product__colors">
            <div><span>Cor:</span><span>{product.color}</span></div>
            <div className="app__product__colors__chooser">
              <a href="#color" />
            </div>
          </div>
          <div className="app__product__sizes">
            <div>Tamanho:</div>
            <div className="app__product__sizes__chooser">
              {product.sizes.map((d, i) =>
                (<a
                  key={i}
                  href="#size"
                  className={classNames({
                    disabled: !d.available,
                    selected: d.size === state.size
                  })}
                  onClick={this.onClickSize}>
                  {d.size}
                </a>)
              )}
            </div>
            <div className="error">{state.sizeError ? 'Por favor selecione um tamanho' : ' '}</div>
          </div>
          <div className="app__product__actions">
            <a href="#comprar" className="btn btn-lg btn-primary btn-block" onClick={this.onClickBuy}>Comprar</a>
          </div>
        </div>
      </div>
    );
  }
}
