import React from 'react'
import PubSub from 'pubsub-js'
import ScrollBar from 'react-perfect-scrollbar'
import { FormattedNumber } from 'react-intl'

import Item from './Item'
import * as CartStorage from '../Utils/CartStorage'

export default class Cart extends React.Component {
  constructor () {
    super ()

    this.state = {
      cart: []
    }
  }

  componentWillMount () {
    this.setState({cart: CartStorage.get()})
  }

  componentDidMount () {
    PubSub.subscribe('cart', (topic, cart) => {
      this.setState({cart: cart})

      PubSub.publish('quantity', cart.products.length)
    })
  }

  removeItem (item) {
    CartStorage.remove(item)
    this.update()
  }

  visibility () {
    return `main-cart ${!this.props.visible ? '' : 'is-visible'}`
  }

  componentWillUnmount () {
    PubSub.clearAllSubscriptions()
  }

  update () {
    let cart = CartStorage.get()
    this.setState({cart: cart})
    PubSub.publish('quantity', cart.products.length)
  }

  renderAmmount (ammount) {
    if (!ammount) {
      return (
        <div className="cart-checkout">
          <p className="checkout">Seu carrinho está vazio. :(</p>
        </div>
      )
    }

    return (
      <div className="cart-checkout">
        <p className="cart-ammount"><strong>Total: </strong> <span><FormattedNumber style="currency" currency="BRL" value={ammount} /></span></p>
        <button className="checkout">Finalizar Compra</button>
      </div>
    )
  }

  render () {
    const classCart = this.visibility()
    const {products, ammount} = this.state.cart

    return (
      <div className={classCart}>
        <div className="cart-mask"></div>

        <div className="cart-container">
          <div className="cart-list">
            <header className="cart-header">
              <p>Carrinho</p>
              <button className="cart-close" onClick={this.props.toggle}>&times;</button>
            </header>

            <div className="list">
              <ScrollBar>
                {
                  products.map((item, index) => (
                    <Item key={index} product={item} remove={this.removeItem.bind(this)} />
                  ))
                }
              </ScrollBar>
            </div>
          </div>

          {this.renderAmmount(ammount)}
        </div>
      </div>
    )
  }
}
