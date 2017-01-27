/* global localStorage */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

export class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMessage: false,
            more:false,
            item:{}
        };
        // BIND
        this.openMessage = this.openMessage.bind(this);
        this.more        = this.more.bind(this);
    }
    /**
     * Pega o carrinho salvo no localStoreage
     * @return {Array}
     */
    getCart(){
        return localStorage.cart ? JSON.parse(localStorage.cart) : [];
    }
    /**
     * Adiciona o item ao carrinho
     */
    addCart(item){
        if(!item) throw 'Que feio :(';
        let carrinho = this.getCart();
        item.qtde = 1;
        // price
        item.price = item.actual_price .replace('R$ ', '');
        item.price = parseFloat(item.price.replace(',', '.'));
        carrinho.push(item);
        localStorage.cart = JSON.stringify(carrinho);
        this.openMessage();
    }
    // Abre ou fecha mais informações
    more(item) {
        this.setState({ more: !this.state.more });
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
                <img className={'image-modal'} 
                    src={this.props.product.image ? this.props.product.image :'./assets/no_image.jpg' }
                />
            </div>
        );
        
        return (
            <div>
                {
                    /* TAG DE PROMOÇÃO */
                    this.props.product.discount_percentage ? (
                        <span className={'sale'}>
                            {this.props.product.discount_percentage}
                        </span>
                    ) : ''
                }
                { /* IMAGEM DO PRODUTO */ }
                <div className={'image-product'} onClick={ this.more }>
                    <img 
                        style={{width:'100%'}}
                        // src={this.props.product.image ? this.props.product.image :'./assets/no_image.jpg' }
                        src={'./assets/no_image.jpg'}
                    />
                </div>
                { /* TAMANHO DO PRODUTO */}
                <div className={'product-sizes'}>
                    {
                        this.props.product.sizes.map((size, index) => {
                            return size.available ? (
                                <div className={'size'} key={index}>
                                    { size.size}
                                </div>
                            ): '' ;
                        })
                    }
                </div>
                { /* NOME DO PRODUTO */}
                <div className={'product-name'} onClick={this.more}> { this.props.product.name } </div>
                { /* PREÇO DO PRODUTO */}
                <div className={'product-price'}>
                    {
                        this.props.product.discount_percentage ? (
                            <span>
                                De <span className={'disable-price'}>
                                    {this.props.product.regular_price}
                                </span> por {this.props.product.actual_price} ou {this.props.product.installments}
                            </span>
                        )
                        :
                        `${this.props.product.actual_price}, ou ${this.props.product.installments}`
                    }
                </div>
                { /* ADICIONAR NO CARRINHO */}
                <div className={'cart-button'} onClick={() => this.addCart(this.props.product)}> CARRINHO </div>
                { /* MODAL COM A IMAGEM DO PRODUTO */}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.more}
                    onRequestClose={this.more}>
                    { dialogContent }
                </Dialog>
                <Snackbar
                    open={this.state.showMessage}
                    message={`Adicionado ao carrinho`}
                    autoHideDuration={4000}/>
            </div>
        );
    }
}