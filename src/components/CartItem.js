import React from 'react'
import { Row, Col, Table, Image } from 'react-bootstrap'
import NumberSelector from './NumberSelector'
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
}) => (
  <Row>

    <Col md={2}>
      <Image src={image} responsive />
    </Col>

    <Col md={10}>

      <h3 className="capitalize">
        {name.toLowerCase()}
      </h3>

      <Table responsive condensed>
        <thead>
          <tr>
            <th>Tamanho</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{size.size}</td>
            <td>{price}</td>
            <td>
              <div className="col-md-3">
                <NumberSelector
                  value={amount}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement} />
              </div>
            </td>
            <td>
              <CloseIcon onClick={onRemove} />
            </td>
          </tr>
        </tbody>
      </Table>

    </Col>

  </Row> )

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