import React from 'react'
import Filter from '../components/Filter'
import Cart from '../containers/Cart'
import VisibleProducts from '../containers/VisibleProducts'

const App = () => (
  <div>

    <section className="col-md-12">
      <Cart />
    </section>

    <nav className="col-md-2">
      <Filter />
    </nav>

    <section className="col-md-10">
      <VisibleProducts />
    </section>
    
  </div>
)

export default App