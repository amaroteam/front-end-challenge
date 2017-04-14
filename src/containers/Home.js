import React from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import CartCount from '../containers/CartCount'
import VisibleProducts from '../containers/VisibleProducts'
import { fetchProducts } from '../actions'

class Home extends React.Component {

  componentDidMount() {
    this.props.dispatch(
      fetchProducts() )
  }

  render() {
    return (
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
  }

}

Home.PropTypes = {
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(Home)