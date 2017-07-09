import React from 'react'
// import PropTypes from 'prop-types'
//
// import { connect } from 'react-redux'

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="shopping-cart">
        This is the shopping cart
      </div>
    )
  }
}

// ShoppingCart.propTypes = {
//
// }

export default ShoppingCart
// Access state to get list of items added to cart

// Dispatches action to remove product from cart.
