import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import utils from '../utils/utils.jsx';

class CartRow extends Component {
    render() {
        var {image, name, quantity, total_item_price} = this.props;

        return (
            <div className="cart-row-container row">                
                <div className="col-xs-4 col-sm-2 col-sm-offset-3">
                    <img src={image} className="img img-responsive" alt=""/>
                </div>
                <div className="col-xs-8 col-sm-4 text-center">
                    <p>{utils.capitalizeFirstLetterEachWord(name)}</p>
                    <p>Quantidade: {quantity}</p>
                    <p>Valor Total: R$ {total_item_price.toFixed(2)}</p>
                    <p><Button bsStyle="danger" block>Remover</Button></p>
                </div>                
            </div>
        );
    }
}

export default CartRow;