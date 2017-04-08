import React from 'react'
import Filter from '../components/Filter'
import Cart from '../containers/Cart'
import VisibleProducts from '../containers/VisibleProducts'

const App = () => (
  <div>
    <Cart />
    <Filter />
    <VisibleProducts />
  </div>
)

export default App