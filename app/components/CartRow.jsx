import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import utils from '../utils/utils.jsx';

class CartRow extends Component {
    constructor(props) {
        super(props);
        this.state = {quantity: this.props.quantity};

        this.handleChangeCartItemQuantity = this.handleChangeCartItemQuantity.bind(this);
        this.handleUpdateCartItemQuantity = this.handleUpdateCartItemQuantity.bind(this);
        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
    }

    handleChangeCartItemQuantity(event) {
        this.setState({quantity: event.target.value});       
    }

    handleUpdateCartItemQuantity(event) {
        this.props.onChangeCartItemQuantity(this.props.id, this.state.quantity);
    }

    handleRemoveCartItem(event) {
        this.props.onRemoveCartItem(this.props.id);
    }

    render() {
        var {image, name, quantity, total_item_price} = this.props;

        return (
            <div className="cart-row-container row">                
                <div className="col-xs-4 col-sm-2 col-sm-offset-3">
                    <img src={image} className="img img-responsive" alt=""/>
                </div>
                <div className="col-xs-8 col-sm-4 text-center">
                    <p>{utils.capitalizeFirstLetterEachWord(name)}</p>
                    <p className="cart-row-quantity">
                        Quantidade: 
                        <input type="number" value={this.state.quantity} onChange={this.handleChangeCartItemQuantity} /> 
                        <Button bsStyle="primary" onClick={this.handleUpdateCartItemQuantity}>
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                        </Button>
                    </p>
                    <p>Valor Total: R$ {total_item_price.toFixed(2)}</p>
                    <p><Button bsStyle="danger" block onClick={this.handleRemoveCartItem}>Remover</Button></p>
                </div>                
            </div>
        );
    }
}

export default CartRow;