import React from 'react'
import CartItem from './CartItem'
import { Table } from 'react-bootstrap'
import { multiply, add, replace, reduce  } from 'lodash'

const { array, func } = React.PropTypes

const CartList = ({
  items,
  onRemove,
  onIncrement,
  onDecrement
}) => {

  const calcTotal = items =>
    reduce( items, (acc, item) => { 
      return add( acc, multiply( 
          item.amount, 
          replace( item.price.substr(3), ',', '.' ) 
        ) 
      ) 
    }, 0 ).toFixed(2) 

  return (
    <div>
      { items.map( item => (
          <div key={item.id}>
            <CartItem
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              amount={item.amount}
              size={item.size}
              onRemove={ () => onRemove(item.id)  }
              onIncrement={ () => onIncrement(item.id) }
              onDecrement={ () => onDecrement(item.id) }
            />
            <hr />
          </div> ) ) }
    
      <span className="pull-right">
        Total: R$ { calcTotal(items) }
      </span>
    </div> ) 
}

CartList.PropTypes = {
  items: array.isRequired,
  onRemove: func,
  onIncrement: func,
  onDecrement: func
}  

export default CartList