import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ProductInfo from '../ProductInfo';
import BuyButton from '../BuyButton';
import ProductImage from '../ProductImage';
import Badge from '../Badge';

const Tile = styled.li`
    width: 100%;
    list-style: none;
    margin: 8px;
    text-align: center;
    border: 1px solid #ddd;
    position: relative;

    @media (min-width: 480px) {
        width: calc(50% - 16px);
    }

    @media (min-width: 1024px) {
        width: calc(25% - 16px);
    }
`;

const SKUButton = styled.button`
    width: 25px;
    height: 25px;
    background: white;
    color: black;
    margin: 4px;
    border: 1px solid black;
    cursor: pointer;
    outline: 0;

    &:disabled {
        opacity: 0.3;
        cursor: default;
    }

    ${props => props.selected && css`
        border-color: red;
        color: red;
    `}
`;

class ProductTile extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
    }

    state = {
        selectedSku: null
    }

    handleSelectSku = selectedSku => {
        this.setState( { selectedSku } )
    }

    handleBuy = () => {
        if(this.state.selectedSku !== null) {
            this.props.addItem(this.props.product, this.state.selectedSku);
            this.setState( { selectedSku: null } )
        }else {
            alert('Tamanho não selecionado');
        }
    }

    render() {
        const { product } = this.props;
        console.log(product);
        return (
            <Tile>
                <ProductImage url={product.image} />

                <ProductInfo
                    actualPrice={product.actual_price}
                    regularPrice={product.regular_price}
                    name={product.name}
                />

                {product.discount_percentage !== "" && <Badge discount={product.discount_percentage} />}
                
                <div>
                    {product.sizes.map(size => (
                        <SKUButton
                            disabled={!size.available}
                            key={size.sku}
                            selected={this.state.selectedSku === size.sku}
                            onClick={() => {this.handleSelectSku(size.sku)}}
                        >
                            {size.size}
                        </SKUButton>
                    ))}
                </div>
                <BuyButton addItem={this.handleBuy} />
            </Tile>
        )
    }
}

export default ProductTile;
