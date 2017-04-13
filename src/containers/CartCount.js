import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Button, Glyphicon, Badge } from 'react-bootstrap'

const mapStateToProps = state => {
  return { itemsLength: state.cart.length }
}

let CartCount = ({itemsLength}) => (
  <Button bsSize="large"> 
    <Link to="/carrinho">
      <Glyphicon glyph="shopping-cart" />&nbsp;
      <Badge>{itemsLength}</Badge>
    </Link>
  </Button>
)

CartCount = connect(mapStateToProps)(CartCount)

export default CartCount