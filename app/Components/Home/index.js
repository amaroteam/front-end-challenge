import React from 'react'

import Cart from '../Cart'
import Product from '../Product'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      products: [],
      cart: [],
      visible: false
    }

    this.toggleCart = this.toggleCart.bind(this)
    this.handleCart = this.handleCart.bind(this)
  }

  componentWillMount () {
    this.getProducts()
  }

  getProducts () {
    fetch('http://localhost:8080/products')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => this.setState({products: data}))
  }

  handleCart (event, product) {
    if (!product.cart) {
      return window.alert('Selecione uma opção')
    }

    this.setState({cart: [...this.state.cart, product]})
  }

  toggleCart () {
    this.setState({visible: true})
  }

  render () {
    return (
      <div className="home">
        <header className="main-header">
          <h1>Amaro</h1>

          <button className="main-cart" onClick={this.toggleCart}>
            <span className="fa fa-shopping-cart"></span>
            <span className="badge-quantities">{this.state.cart.length}</span>
          </button>
        </header>

        <div className="products-list">
          {this.state.products.map(product => Product(product, this.handleCart))}
        </div>

        {Cart(this.state.cart, this.state.visible)}
      </div>
    )
  }
}
