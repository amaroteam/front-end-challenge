import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { removeItem } from '../actions/cart'
import CartComponent from '../components/cart'

class Cart extends Component {
  state = { open: false }

  toggleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  getTotalPrice () {
    const { items } = this.props
    let tP = items.reduce((acc, item) => (
      parseInt(item.actual_price.replace(/\D/g, '')) + acc
    ), 0)

    tP = tP / 100
    return tP.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  render () {
    const total = this.props.items.length
    const totalPrice = this.getTotalPrice()
    const mergedProps = { ...this.props, ...this.state, total, totalPrice }

    return ( <CartComponent {...mergedProps} toggleOpen={this.toggleOpen} /> )
  }
}

const mapStateToProps = state => ({
  items: state.cart.items || []
})

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
