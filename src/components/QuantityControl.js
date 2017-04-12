import React from 'react'

const QuantityControl = ({
  quantity,
  onIncremented,
  onDecremented }) => (
  <div>
   <button onClick={onDecremented}> - </button>
   <span>{ quantity }</span>
   <button onClick={onIncremented}> + </button>
 </div> )

export default QuantityControl