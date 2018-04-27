import React from 'react'
import Cart from '../containers/cart'

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

const App = props => (
  <section role="main">
    <AppBar position="fixed" style={{ backgroundColor: '#42A5F5' }}>
      <Toolbar>
        <Cart />
      </Toolbar>
    </AppBar>
    <GridList className={props.classes.list} cellHeight={240} cols={props.cols} spacing={16}>
      {props.products.map(prod => (
        <GridListTile cols={1} key={prod.id}>
          <img src={prod.image} alt={prod.name} />
          <GridListTileBar
            title={prod.name}
            subtitle={<span>Por: {prod.installments}</span>}
            actionIcon={
              <IconButton
                className={props.classes.icon}
                onClick={() => props.add(prod)}
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

const styles = {
  list: {
    margin: 0,
    padding: '6rem 2rem',
  },
  icon: {
    color: 'white'
  }
}

export default withStyles(styles)(App)
