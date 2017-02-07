import React from 'react'

const Icon = ({name}) => {
  const iconName = `icon lnr lnr-${name}`
  const idName = `#lnr-${name}`

  return (
    <svg className={iconName}>
      <use xlinkHref={idName}></use>
    </svg>
  )
}

export default Icon
