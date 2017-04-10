import React from 'react'
import CartItem from './CartItem'
import { Table } from 'react-bootstrap'

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
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>lorem ipsum dolor sit</td>
          <td>PP</td>
          <td>R$ 129,90</td>
          <td>5</td>
          <td>R$ 790,45</td>
        </tr>
        <tr>
          <td colSpan="5">R$ 790,45</td>
        </tr>
      </tbody>
    </Table>
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