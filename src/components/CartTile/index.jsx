import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductImage from '../ProductImage';
import ProductInfo from '../ProductInfo';

const Tile = styled.li`
    width: calc(100% - 16px);
    list-style: none;
    margin: 4px 8px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
`;

class CartTile extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
    }

    render() {
        const { product } = this.props;

        return (
            <Tile>
                <ProductImage url={product.image} cart />
                <ProductInfo
                    actualPrice={product.price}
                    regularPrice={product.price}
                    name={product.name}
                    quantity={product.quantity}
                    cart
                />
            </Tile>
        )
    }
}

export default CartTile;
