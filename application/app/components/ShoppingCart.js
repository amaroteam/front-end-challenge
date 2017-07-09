import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cartRemoveProduct } from '../actions'

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  renderProductsList () {
    return this.props.shoppingCart.map((item, index) => {
      return (
        <li key={index}>
          {item.name} {item.actual_price}
        </li>
      )
    })
  }

  renderTotalPrice () {
    let value = 0

    this.props.shoppingCart.map((item) => {
      value = value + Number(item.actual_price.replace(/[^0-9.]+/g,""))
    })

    let total = value+''
    total = total.replace(/([0-9]{2})$/g, ",$1")
    if (total.length > 6) total.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")

    return (
      <div className="total">{`R$ ${total}`}</div>
    )
  }

  render () {
    return (
      <div className="shopping-cart">
        <p>This is the shopping cart</p>
        <ul>
          {this.renderProductsList()}
        </ul>

        {this.renderTotalPrice()}
      </div>
    )
  }
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    shoppingCart: state.shoppingCart,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: bindActionCreators(cartRemoveProduct, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
