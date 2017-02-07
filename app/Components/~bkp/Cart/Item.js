import React from 'react'
import {IntlProvider, FormattedNumber} from 'react-intl';

export default class Item extends React.Component {
  constructor () {
    super()

    this.state = {
      quantity: 1
    }
  }

  decrease () {
    if (this.state.quantity <= 1) {
      return
    }

    this.setState({quantity: this.state.quantity - 1})
  }

  increase () {
    if (this.state.quantity >= 999) {
      return
    }

    this.setState({quantity: this.state.quantity + 1})
  }

  render () {
    const {product} = this.props

    return (
      <div className="cart-product">
        <figure className="image">
          <img src={product.image} alt={product.name} />
        </figure>

        <div className="item-info">
          <div className="meta">
            <h2>{product.name}</h2>
            <p>Color: <strong>{product.color}</strong></p>
          </div>

          <div className="prices">
            <div className="quantity">
              <button onClick={this.decrease.bind(this)}>-</button>
              <input type="text" value={this.state.quantity}/>
              <button onClick={this.increase.bind(this)}>+</button>
            </div>

            <p><strong>{product.actual_price}</strong></p>
          </div>
        </div>
      </div>
    )
  }
}
