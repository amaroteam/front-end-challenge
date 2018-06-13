import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const ProductTitle = styled.h2`
    font-size: 14px;
    margin: 8px 0;
`;

const ProductInfoWrapper = styled.div`
    height: 100px;
    
    ${props => props.cart && css`
        height: auto;
        margin-left: 32px;
    `}
`

class ProductInfo extends PureComponent {
    static propTypes = {
        actualPrice: PropTypes.string,
        regularPrice: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
    }

    render() {
        const { actualPrice, regularPrice, name, quantity, cart } = this.props;

        return (
            <ProductInfoWrapper cart={cart}>
                {actualPrice !== regularPrice ?
                    <span>De {regularPrice}</span> : null}
                <p>Por {actualPrice}</p>
                <ProductTitle>{name}</ProductTitle>
                {quantity ? (
                    <small>Quantidade: {quantity}</small>
                ) : null}
            </ProductInfoWrapper>
        );
    }
}

export default ProductInfo;
