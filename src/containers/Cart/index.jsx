import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import CartTile from '../../components/CartTile';
import * as CartActions from '../../actions/cart';

const CartWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 75px;
`

const EndButton = styled.button`
    height: 50px;
    background: black;
    font-size: 14px;
    color: white;
    width: 320px;
    margin: 8px;
`;

class Cart extends Component {
    render() {
        const { cart } = this.props.state;

        return(
            <CartWrapper>
                {cart.items.map((product, key) => (
                    <CartTile
                        key={key}
                        product={product}
                    />
                ))}

                <EndButton>{cart.total} Comprar</EndButton>
            </CartWrapper>
        );
    }
}

export default withRouter(connect(
    state => ({ state }),
    dispatch => ({
        actions: bindActionCreators({
            ...CartActions,
        }, dispatch)
    })
)(Cart));
