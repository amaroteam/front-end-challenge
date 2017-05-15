import React from 'react'
import { connect } from 'react-redux'

import Cart from './Cart'
import Header from './Header'
import Products from './Products'

import { toggleVisibility } from '../actions/cartActions'

const App = props => (
  <div className={props.cart.visible ? 'cart-is-visible' : null}>
    <Header toggle={props.toggle} quantity={props.cart.products.length} />
    <Products />
    <Cart />
  </div>
)

const mapStateToProps = ({cart}) => ({
  cart
})

const mapDispatchToProps = (dispatch => ({
  toggle () {
    dispatch(toggleVisibility())
  }
}))

export default connect(mapStateToProps, mapDispatchToProps)(App)