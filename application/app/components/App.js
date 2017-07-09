import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadProductsList } from '../actions'

// I gonna load it here to keed the app simple,
// in a real application I would made in async.
import products from '../products.json'

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
      <div className="app">
        <h1>Shooping Sample</h1>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: bindActionCreators(loadProductsList, dispatch)
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapDispatchToProps)(App)

// react router
