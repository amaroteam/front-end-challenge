import React from 'react'

const { bool, node, func } = React.PropTypes

const Link = ({ active, children, onClick }) => {

  if (active)
    return <span>{ children }</span>

  return (
    <a
      href="#"
      onClick={ e => {
        e.preventDefault()
        onClick() } } >
      { children }</a>
  )

}

Link.PropTypes = {
  active: bool,
  children: node.isRequired,
  onClick: func
}

export default Link