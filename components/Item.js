import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state.more = false;
        this.state.showMessage = false;
        this.state.item = {};
        // BIND
        this.more = this.more.bind(this);
        this.openMessage = this.openMessage.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    // Abre ou fecha mais informações
    more(item) {
        this.setState({ more: !this.state.more });
    }
    // Remove o item do carrinho
    removeItem(){
        this.setState({showMessage:false});
    }
    openMessage(){
        this.setState({showMessage:true});
    }
    render () {
        const actions = [
          <FlatButton
            label="Fechar"
            primary={true}
            onTouchTap={this.more}
          />
        ];
        
        const dialogContent = (
            <div>
                <div className={'modal-name'}>{this.props.product.name}</div>
                <img className={'image-modal'} src={this.props.product.image} />
                <div className={'product-sizes'}>
                    <b>
                        {
                            this.props.product.sizes.map((size, index) => {
                                return size.available ? `${size.size}, ` : '';
                            })
                        }
                    </b>
                </div>
            </div>
        );
        
        return (
            <div>
                {
                   // <div onClick={ this.more } className={'product-image'}></div>
                }
                {
                     <img src={this.props.product.image } style={{width:'100%'}}/>
                }
                <div className={'product-name'} onClick={this.more}>
                    { this.props.product.name }
                    {
                        /* <i className={'ion-ios-cart cart-icon'}></i> */
                    }
                </div>
                <div className={'product-price'}>
                    {`${this.props.product.actual_price}, ou ${this.props.product.installments}`}
                </div>
                <div className={'cart-button'} onClick={this.openMessage}>
                    CARRINHO
                </div>
                
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.state.more}
                  onRequestClose={this.more}
                >
                { dialogContent }
                </Dialog>
                 <Snackbar
                  open={this.state.showMessage}
                  message={`Adicionado ao carrinho`}
                  action="Desfazer"
                  autoHideDuration={4000}
                  onActionTouchTap={this.removeItem}
                />
            </div>
        );
    }
}