import React from 'react'

const CartItem = ({
  id,
  name,
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

export default CartItem