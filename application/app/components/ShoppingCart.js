import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

import { cartRemoveProduct } from '../actions'

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  removeItem = (style) => {
    const { dispatch } = this.props

    dispatch(cartRemoveProduct(style))
  }

  renderProductsList () {
    return this.props.shoppingCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.actual_price}</td>
          <th>1</th>
          <th><button onClick={()=>{this.removeItem(item.style)}}>X</button></th>
        </tr>
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
        <h2>ShoppingCart</h2>
        <table width="100%">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qtt</th>
              <th>Remove</th>
            </tr>
            {this.renderProductsList()}
          </tbody>
        </table>

        {this.renderTotalPrice()}

        <button>Checkout</button>
        <Link to="/"><button>Continue Shopping</button></Link>
      </div>
    )
  }
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
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
