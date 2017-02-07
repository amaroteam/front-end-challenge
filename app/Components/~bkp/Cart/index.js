import React from 'react'
import {IntlProvider, FormattedNumber} from 'react-intl';

import Item from './Item'

// @TODO: Calcular preço total do carrinho
// @TODO: Aumentar a quantidade dos produtos
// @TODO: Calcular valor final do carrinho pela quantidade de cada item

export default class Cart extends React.Component {
  constructor () {
    super()
    this.state = {total: 0}
  }

  toInt (number) {
    return parseFloat(number.replace(/[^0-9\,]+/g, '').replace(',', '.'))
  }

  render () {
    return (
      <div className="cart-container">
        <div className="cart-main">
          <div className="cart-list">
            {
              this.props.list.map(item => <Item product={item} />)
            }
          </div>

          <div className="checkout">
            <IntlProvider locale='en'>
              <FormattedNumber value={this.state.total} style="currency" currency={'BRL'} />
            </IntlProvider>
          </div>
        </div>
      </div>
    )
  }
}
