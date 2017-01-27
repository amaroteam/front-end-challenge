import React from 'react'

import Product from '../Product'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {products: []}
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

  render () {
    return (
      <div className="home">
        <h1>Réslo!</h1>
        {
          this.state.products.map(Product)
        }
      </div>
    )
  }
}
