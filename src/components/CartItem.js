import React from 'react'
import QuantityControl from './QuantityControl'
import CloseIcon from './CloseIcon'

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
}) => {

  const stringToNumber = string =>
    Number(
      string
        .replace(',', '.')
        .substr(3) )

  const toFixed = (number, digits) => number.toFixed(digits)

  const multiply = (num1, num2) => num1 * num2

  return (
    <tr>
      <td>{ name } </td>
      <td>{ size.size }</td>
      <td>{ price }</td>
      <td>
        <QuantityControl
          quantity={amount}
          onIncremented={onIncrement}
          onDecremented={onDecrement} />
      </td>
      {/*<td>R$ {
        toFixed(
          multiply( amount, stringToNumber( price ) )
          , 2 )
      } </td>*/}
      <td>
        <CloseIcon onClick={onRemove} />
      </td>
    </tr> )
}

CartItem.PropTypes = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  amount: number.isRequired,
  onRemove: func.isRequired,
  onIncrement: func.isRequired,
  onDecrement: func.isRequired
}

export default CartItem