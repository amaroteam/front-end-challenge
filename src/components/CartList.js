import React from 'react'
import CartItem from './CartItem'

const CartList = ({
  items,
  onRemoved,
  onIncremented,
  onDecremented
}) => (
  {
    items.map(item =>
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.on_sale ? item.actual_price : item.regular_price}
        amount={item.amount}
        onRemove={onRemoved}
        onIncremen={onIncremented}
        onDecrement={oonDecremented}
      />
    )
  }
) 

export default CartList