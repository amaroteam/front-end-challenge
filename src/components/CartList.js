import React from 'react'
import CartItem from './CartItem'

const { array, func } = React.PropTypes

const CartList = ({
  items,
  onRemoved,
  onIncremented,
  onDecremented
}) => (
  <div>
    { items.map( item =>
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.on_sale ? item.actual_price : item.regular_price}
        amount={item.amount}
        onRemove={onRemoved}
        onIncrement={onIncremented}
        onDecrement={onDecremented}
      /> ) }
  </div> ) 

CartList.PropTypes = {
  items: array.isRequired,
  onRemoved: func,
  onIncremented: func,
  onDecremented: func
}  

export default CartList