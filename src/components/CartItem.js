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
  <div className="col-md-12">
    <div className="col-md-4">
      <img src={image} className="img-responsive" />
    </div>
    <h4 className="col-md-4">{name}</h4>
    <div className="col-md-4">
      <span>{price}</span>
      <button onClick={ () => onDecrement(id) }>
        -
      </button>
      <span>{amount}</span>
      <button onClick={ () => onIncrement(id) }>
        +
      </button>
      <button onClick={ () => onRemove(id) }>
        x
      </button>
    </div>
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