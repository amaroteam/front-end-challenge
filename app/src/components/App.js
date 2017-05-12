import React from 'react'
import { connect } from 'react-redux'

import Cart from './Cart'
import Header from './Header'
import Loader from './Loader'
import Products from './Products'
import ErrorHandle from './ErrorHandle'

const mapStateToProps = ({products, cart}) => ({
  cart,
  products
})

class App extends React.Component {
  render() {
    let { products, cart } = this.props

    if (products.error) {
      return (
        <ErrorHandle title="Oops" message={products.error} />
      )
    }

    if (products.fetching) {
      return (<Loader />)
    }

    return (
      <div className={cart.visible ? 'cart-is-visible' : null}>
        <Header quantity={cart.products.length} />
        <Products products={products.data} />
        <Cart />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
