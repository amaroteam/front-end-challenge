import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Nav } from 'react-bootstrap'

const Filter = () => (
  <div>

    <h4>Filtro</h4>

    <Nav bsStyle="pills" stacked activeKey={1}>

      <FilterLink filter="ALL">
        Todos
      </FilterLink>

      <FilterLink filter="ON_SALE">
        Em promoção
      </FilterLink>

    </Nav>

  </div>
)

export default Filter