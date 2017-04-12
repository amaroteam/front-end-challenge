import React from 'react'
import CartItem from './CartItem'
import { Table } from 'react-bootstrap'
import { multiply, add, replace, reduce  } from 'lodash'

const { array, func } = React.PropTypes

const CartList = ({
  items,
  onRemoved,
  onIncremented,
  onDecremented
}) => (
  <div className="row">
    <Table responsive condensed hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tamanho</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { items.map( item =>
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              size={item.size}
              onRemove={ () => onRemoved(item.id)  }
              onIncrement={ () => onIncremented(item.id) }
              onDecrement={ () => onDecremented(item.id) }
            /> ) }
        <tr>
          <td colSpan="5">
            <span className="pull-right">Total: R$ {
              reduce( items, (acc, item) => {
                return add( acc, multiply(
                    item.amount,
                    replace( item.price.substr(3), ',', '.' )
                  )
                )
              }, 0 ).toFixed(2)
            } </span>
          </td>
        </tr>
      </tbody>
    </Table>
  </div> ) 

CartList.PropTypes = {
  items: array.isRequired,
  onRemoved: func,
  onIncremented: func,
  onDecremented: func
}  

export default CartList