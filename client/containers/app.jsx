import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Cart from './cart'
import { addItem } from '../actions/cart'

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Subheader from 'material-ui/List/ListSubheader'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'

import { withStyles } from 'material-ui/styles'


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

    return (
      <section role="main">
        <AppBar position="fixed" style={{ backgroundColor: '#42A5F5' }}>
          <Toolbar>
            <Cart />
          </Toolbar>
        </AppBar>
        <GridList className={classes.list} cellHeight={240} cols={cols} spacing={16}>
          {products.map(prod => (
            <GridListTile cols={1} key={prod.id}>
              <img src={prod.image} alt={prod.name} />
              <GridListTileBar
                title={prod.name}
                subtitle={<span>Por: {prod.installments}</span>}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    onClick={() => this.props.add(prod)}
                    aria-label="Add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </section>
    )
  }
}

const styles = {
  list: {
    margin: 0,
    padding: '0 2rem',
  },
  icon: {
    color: 'white'
  }
}

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(addItem(item))
})

const styledApp = withStyles(styles)(App)
export default connect(null, mapDispatchToProps)(styledApp)
