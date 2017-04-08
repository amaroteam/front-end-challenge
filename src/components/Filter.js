import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filter = () => (
  <div>
    <h4>Filtro</h4>
    <ul>
      <li>
        <FilterLink filter="ALL">
          Todos
        </FilterLink>
      </li>
      <li>
        <FilterLink filter="ON_SALE">
          Em promoção
        </FilterLink>
      </li>
    </ul>
  </div>
)

export default Filter