import React from 'react'

const { string, func , number } = React.PropTypes

const CartItem = ({
  id,
  name,
  image,
  price,
  amount,
  onRemove,
  onIncrement,
  onDecrement
}) => (
  <div>
    <img src={image} />
    <h4>{name}</h4>
    <span>{price}</span>
    <div>
      <button onClick={ () => onDecrement(id) }>
        -
      </button>
      <span>{amount}</span>
      <button onClick={ () => onIncrement(id) }>
        +
      </button>
    </div>
    <button onClick={ () => onRemove(id) }>
      x
    </button>
  </div>
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