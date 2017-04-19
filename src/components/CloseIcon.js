import React from 'react'

const CloseIcon = ({ onClick }) => (
  <button
    type="button"
    className="close"
    aria-label="Close"
    onClick={onClick}>
    <span aria-hidden="true">&times;</span>
  </button> )

export default CloseIcon