import React from 'react'

export default props => (
  <div className="error">
    <span>{props.title}</span>
    <p>{props.message}</p>
  </div>
)
