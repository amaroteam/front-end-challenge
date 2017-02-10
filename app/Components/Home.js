import React from 'react'
import uuid from 'uuid'

import Logo from './Logo'
import Icon from './Icon'
import Cart from './Cart'
import Product from './Product'

import Products from '../Utils/Products'
import * as CartStorage from '../Utils/CartStorage'

// Alterar a quantidade de produtos.
// Mostrar apenas tamanhos em estoque.
// Filtrar: produtos em promoção.
// Selecionar produtos por tamanho.
// Testes (?)

// Hover nos botões do produtos.
// Mostrar qual produto já está no carrinho.
// Animar o icon quando o produto for adicionado.
// Animar os items do carrinho quando ele mostrar o carrinho.

export default class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      products: [],
      cart: [],
      visible: false
    }
  }

  componentWillMount () {
    Products.all()
      .then(response => this.setState({products: response}))

    this.setState({cart: CartStorage.get()})
  }

  addTocart (item) {
    // @TODO: Mudar a quantidade
    item.quantity = 1
    item.id = uuid()

    CartStorage.add(item)

    this.setState({cart: CartStorage.get()})
  }

  removeCart (item) {
    CartStorage.remove(item)
    this.setState({cart: CartStorage.get()})
  }

  toggleCart () {
    return this.setState({visible: !this.state.visible})
  }

  render () {
    return (
      <main className="main-container">
        <header className="main-header">
          <Logo width="150px" height="80px" viewBox="0 0 260 45" color={'#111'} />

          <button className="header-cart" onClick={this.toggleCart.bind(this)}>
            <Icon name="cart" />
            <span className="indicator">{this.state.cart.products.length}</span>
          </button>
        </header>

        <section className="products-list">
          {
            this.state.products.map((product, index) =>
              <Product key={index} item={product} cart={this.addTocart.bind(this)} />
            )
          }
        </section>

        <Cart
          cart={this.state.cart}
          visible={this.state.visible}
          toggle={this.toggleCart.bind(this)}
          removeProduct={this.removeCart.bind(this)}
        />
      </main>
    )
  }
}
