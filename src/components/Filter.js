import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filter = () => (
  <div>
    <FilterLink filter="ALL">
      Todos
    </FilterLink>
    <FilterLink filter="ON_SALE">
      Em promoção
    </FilterLink>
  </div>
)

export default Filter