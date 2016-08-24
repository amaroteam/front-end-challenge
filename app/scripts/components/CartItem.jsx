import React from 'react';
import { autobind } from 'core-decorators';
import { shouldComponentUpdate, formatMoney } from 'utils/helpers';

import { removeFromCart, updateCart } from 'actions';

export default class CartItem extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickUpdate(e) {
    e.preventDefault();
    const el = e.currentTarget;

    this.props.dispatch(updateCart({ sku: this.props.data.sku, value: parseInt(el.dataset.value, 10) }));
  }

  @autobind
  onClickRemove(e) {
    e.preventDefault();

    this.props.dispatch(removeFromCart({ sku: this.props.data.sku }));
  }

  render() {
    const props = this.props;
    const data = props.data;

    return (
      <div className="app__item">
        <div className="app__item__image">
          {data.image ? <img src={data.image} alt={data.name} /> : <div />}
        </div>
        <div className="app__item__body">
          <div className="app__item__header">
            <h3>{data.name}</h3>
            <a href="#remove" className="app__item__remove" onClick={this.onClickRemove}><i
              className="i-trash-o" /></a>
          </div>
          <div className="app__item__info">
            <span>{`Cor: ${data.color}`}</span>
          </div>
          <div className="app__item__footer">
            <div className="app__item__quantity">
              <a href="#update" data-value="-1" onClick={this.onClickUpdate}>
                <i className="i-chevron-down" />
              </a>
              <span>{data.quantity}</span>
              <a href="#update" data-value="1" onClick={this.onClickUpdate}>
                <i className="i-chevron-up" />
              </a>
            </div>
            <div>Tamanho: {data.size}</div>
            <div>{formatMoney(data.price)}</div>
          </div>
        </div>
      </div>
    );
  }
}
