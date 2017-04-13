import React from 'react'
import { Col } from 'react-bootstrap'
import Filter from '../components/Filter'
import CartCount from '../containers/CartCount'
import VisibleProducts from '../containers/VisibleProducts'

const Home = () => (
  <div>

    <nav className="col-md-2">
      <Filter />
    </nav>

    <section className="col-md-10">
      <Col md={12}>
        <div className="pull-right">
          <CartCount />
        </div>
      </Col>
      <VisibleProducts />
    </section>
    
  </div>
)

export default Home