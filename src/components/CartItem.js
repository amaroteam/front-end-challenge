import React from 'react'
import QuantityControl from './QuantityControl'

const { string, func , number } = React.PropTypes

const CartItem = ({
  id,
  name,
  image,
  price,
  amount,
  size,
  onRemove,
  onIncrement,
  onDecrement
}) => (
  <tr>
    <td>{ name } </td>
    <td>{ size.size }</td>
    <td>{ price }</td>
    <td>
      <QuantityControl
        quantity={amount}
        onIncremented={ () => null }
        onDecremented={ () => null } />
    </td>
    <td>R$ { amount * price }</td>
  </tr>
) 

CartItem.PropTypes = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  amount: number.isRequired,
  onRemove: func,
  onIncrement: func,
  onDecrement: func
}

export default CartItem