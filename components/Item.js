import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export class Item extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                {
                    <div className={'product-image'}></div>
                }
                {
                    // <img src={this.props.product.image } style={{width:'100%'}}/>
                }
                <div className={'product-name'}>
                    { this.props.product.name }
                    {
                        /* <i className={'ion-ios-cart cart-icon'}></i> */
                    }
                </div>
                <div className={'product-price'}>
                    {`${this.props.product.actual_price}, ou ${this.props.product.installments}`}
                </div>
                <div className={'cart-button'}>
                    CARRINHO
                </div>
            </div>
        );
    }
}