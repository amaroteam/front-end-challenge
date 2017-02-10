import React from 'react'
import PubSub from 'pubsub-js'

import Logo from './Logo'
import Icon from './Icon'
import Cart from './Cart'
import Product from './Product'

import * as Products from '../Utils/Products'
import * as CartStorage from '../Utils/CartStorage'

// Alterar a quantidade de produtos.
// Mostrar apenas tamanhos em estoque.
// Filtrar: produtos em promoção.
// Selecionar produtos por tamanho.
// Testes (?)

// Mostrar qual produto já está no carrinho.
// Animar o icon quando o produto for adicionado.
// Animar os items do carrinho quando ele mostrar o carrinho.

export default class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      products: [],
      visible: false,
      quantity: 0
    }
  }

  componentWillMount () {
    Products.all()
      .then(response => this.setState({products: response}))

    this.setState({quantity: CartStorage.get().products.length})
  }

  componentDidMount () {
    PubSub.subscribe('quantity', (topic, quantity) => {
      this.setState({quantity: quantity})
    })
  }

  toggleCart () {
    return this.setState({visible: !this.state.visible})
  }

  componentWillUnmount () {
    PubSub.clearAllSubscriptions()
  }

  renderIndicator () {
    if (!this.state.quantity) {
      return
    }

    return <span className="indicator">{this.state.quantity}</span>
  }

  render () {
    return (
      <main className="main-container">
        <header className="main-header">
          <Logo width="150px" height="80px" viewBox="0 0 260 45" color={'#111'} />

          <button className="header-cart" onClick={this.toggleCart.bind(this)}>
            <Icon name="cart" />
            {this.renderIndicator()}
          </button>
        </header>

        <section className="products-list">
          {
            this.state.products.map((product, index) =>
              <Product key={index} item={product} />
            )
          }
        </section>

        <Cart
          visible={this.state.visible}
          toggle={this.toggleCart.bind(this)}
        />
      </main>
    )
  }
}
