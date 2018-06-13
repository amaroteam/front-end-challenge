import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    width: auto;
    height: 300px;
    min-height: 300px;

    ${props => props.cart && css`
        height: 150px;
        min-height: 150px;
    `}
`;

class ProductImage extends PureComponent {
    static propTypes = {
        url: PropTypes.string,
        cart: PropTypes.bool,
    }

    render() {
        return (
            <Image src={this.props.url} cart={this.props.cart} />
        )
    }
}

export default ProductImage;
