import React from 'react'
import { Col } from 'react-bootstrap'
import Filter from '../components/Filter'
import CartCount from '../containers/CartCount'
import Cart from '../containers/Cart'
import VisibleProducts from '../containers/VisibleProducts'

// const App = () => (
//   <div>

//     <nav className="col-md-2">
//       <Filter />
//     </nav>

//     <section className="col-md-10">
//       <Col md={12}>
//         <div className="pull-right">
//           <CartCount />
//         </div>
//       </Col>
//       <VisibleProducts />
//     </section>
    
//   </div>
// )

const App = () => (
  <div>
    <div className="row">
        <Cart />
    </div>
    <VisibleProducts />
  </div> )

export default App