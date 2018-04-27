import React from 'react'

import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import Typography from 'material-ui/Typography'
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

const Cart = props => (
  <React.Fragment>
    <Button style={{ color: 'white' }} onClick={props.toggleOpen}>Exibir carrinho</Button>
    <CustomDialog
      onClose={props.toggleOpen}
      open={props.open}>
      <DialogTitle id="simple-dialog-title">{`Sacola (${props.total})`}</DialogTitle>
      <Paper className={props.classes.paper}>
        <Table className={props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Imagem</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Remover</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map(item => {
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
                      onClick={() => props.remove(item.id)}
                      aria-label="Add to shopping cart">
                      <RemoveShoppingCartIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <Typography variant='title' align='right'>
                  {`Total: ${props.totalPrice}`}
                </Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </CustomDialog>
  </React.Fragment>
)

const styles = {
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '70%',
  },
}

export default withStyles(styles)(Cart)
