import React from 'react';
import { autobind } from 'core-decorators';
import { shouldComponentUpdate, formatMoney } from 'utils/helpers';

export default class CartItem extends React.Component {
  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickUpdate(e) {
    e.preventDefault();

    const el = e.currentTarget;

    console.log(el.dataset);
  }

  render() {
    const props = this.props;
    const data = props.data;

    return (
      <div className="app__item">
        <div className="app__item__image">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="app__item__body">
          <h3>{data.name}</h3>
          <a href="#remove" className="app__item__remove" onClick={this.onClickRemove}><i
            className="i-trash-o" /></a>
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
