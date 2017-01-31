import React from 'react'

import Cart from '../Cart'
import Product from '../Product'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {products: [], cart: []}

    this.addToCart = this.addToCart.bind(this)
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

  addToCart (product) {
    product = {
      style: product.style,
      name: product.name,
      price: product.actual_price,
      installments: product.installments,
      quantity: 1
    }

    // Verify if current product is on Cart
    let exists = this.state.cart.filter(item => item.style === product.style)

    if (exists.length) {
      return
    }

    return this.setState({cart: [...this.state.cart, product]})
  }

  render () {
    return (
      <div className="home">
        <header className="main-header">
          <h1>Amaro</h1>
          <Cart products={this.state.cart} />
        </header>

        <div className="products-list">
          {
            this.state.products.map(pdt => (
              <Product
                key={pdt.code_color}
                product={pdt}
                cart={this.addToCart}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
