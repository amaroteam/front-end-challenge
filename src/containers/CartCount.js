import React from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon, Badge } from 'react-bootstrap'

const mapStateToProps = state => {
  return { itemsLength: state.cart.length }
}

let CartCount = ({itemsLength}) => (
  <Button bsSize="large">
    <Glyphicon glyph="shopping-cart" />&nbsp;
    <Badge>{itemsLength}</Badge>
  </Button>
)

CartCount = connect(mapStateToProps)(CartCount)

export default CartCount