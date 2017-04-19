import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const { number, func } = React.PropTypes

const NumberSelector = ({
  value,
  onIncrement,
  onDecrement }) => (

  <InputGroup
    bsSize="small"
    className="number-selector">

    <InputGroup.Button>
      <Button
        onClick={onDecrement}>-</Button>
    </InputGroup.Button>

    <FormControl
      type="text"
      value={value}
      readOnly />

    <InputGroup.Button>
      <Button
        onClick={onIncrement}>+</Button>
    </InputGroup.Button>

  </InputGroup> ) 

NumberSelector.PropTypes = {
  value: number.isRequired,
  onIncrement: func.isRequired,
  onDecrement: func.isRequired
}

export default NumberSelector