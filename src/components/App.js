import React from 'react'
import Filter from '../components/Filter'
// import Cart from '../containers/Cart'
import VisibleProducts from '../containers/VisibleProducts'

const App = () => (
  <div>

    <nav className="col-md-2">
      <Filter />
    </nav>

    <section className="col-md-10">
      <VisibleProducts />
    </section>
    
  </div>
)

export default App