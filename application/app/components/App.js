import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadProductsList } from '../actions'

import { BrowserRouter, Route, Link } from 'react-router-dom'

// I gonna load it here to keed the app simple,
// in a real application I would made in async.
import products from '../products.json'

// views
import ProductsList from './ProductsList'
import ProductDetails from './ProductDetails'
import ShoppingCart from './ShoppingCart'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(loadProductsList(products))
  }

  render () {
    return (
      <BrowserRouter>
        <div className="app">
          <header>
            <Link to='/'>
              <h1>Shopping</h1>
            </Link>
            <Link to='/shopping-cart'>View Cart</Link>
          </header>
          <Route exact path="/" component={ProductsList} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <footer>
            <p>Copyright © 2017</p>
          </footer>
        </div>
      </BrowserRouter>

    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: bindActionCreators(loadProductsList, dispatch)
  }
}

export default connect(mapDispatchToProps)(App)

// react router
