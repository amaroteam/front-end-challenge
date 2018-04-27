import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { removeItem } from '../actions/cart'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import { withStyles } from 'material-ui/styles'

const CustomDialog = withStyles({
  paper: {
    width: '100%'
  },
  'paperWidthSm': {
    maxWidth: '70vw'
  },
})(
  (props) => {
    const { children, ...rest } = props
    return <Dialog {...rest}>{children}</Dialog>
  }
)

class Cart extends Component {
  state = { open: false }

  toggleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render () {
    const { classes, items } = this.props
    const total = items.length
    return (
      <React.Fragment>
        <Button style={{ color: 'white' }} onClick={this.toggleOpen}>Exibir carrinho</Button>
        <CustomDialog
          onClose={this.toggleOpen}
          open={this.state.open}>
          <DialogTitle id="simple-dialog-title">{`Sacola (${total})`}</DialogTitle>
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Imagem</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Remover</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map(item => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Avatar src={item.image} alt={item.name} />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell numeric>{item.actual_price}</TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          onClick={() => this.props.remove(item.id)}
                          aria-label="Add to shopping cart">
                          <RemoveShoppingCartIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </CustomDialog>
      </React.Fragment>
    )
  }
}

const styles = {
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '70%',
  },
}

const mapStateToProps = state => ({
  items: state.cart.items || []
})

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeItem(id))
})

const styledCart = withStyles(styles)(Cart)
export default connect(mapStateToProps, mapDispatchToProps)(styledCart)
