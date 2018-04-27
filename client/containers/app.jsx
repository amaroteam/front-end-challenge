import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import AppComponent from '../components/app'
import { addItem } from '../actions/cart'

class App extends React.Component {
  constructor () {
    super ()
    this.state = { products: [], cols: 2 }
  }

  async componentDidMount () {
    this.getCols()
    window.addEventListener('resize', this.getCols)

    try {
      const response = await axios('/api/products')

      if (response.status === 200) {
        const { products } = response.data

        this.setState(prevState => ({
          ...prevState,
          products: this.setItemId(products)
        }))
      }
    } catch (e) {
      console.error(e);
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.getCols)
  }

  setItemId = products => (
    products.map((p, i) => ({
      id: i.toString().padStart(4, '0'),
      ...p
    }))
  )

  getCols = () => {
    const iWidth = window.innerWidth
    let cols

    if (iWidth <= 600) cols = 2
    if (iWidth > 600 && iWidth <= 960) cols = 3
    if (iWidth > 960 && iWidth <= 1280) cols = 4
    if (iWidth > 1280 && iWidth <= 1920) cols = 5

    this.setState(prevState => ({ ...prevState, cols }))
  }

  render () {
    const { classes } = this.props
    const { products, cols } = this.state
    if (!products.length) return ( <small>carregando...</small> )

    const mergedProps = { ...this.props, ...this.state }

    return ( <AppComponent { ...mergedProps } /> )
  }
}

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(App)
