import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductButton = styled.button`
    font-size: 14px;
    height: 50px;
    background: #000;
    color: white;
    width: 100%;
    display: block;
    cursor: pointer;
    outline: 0;
`;

class BuyButton extends PureComponent {
    static propTypes = {
        addItem: PropTypes.func,
    }

    render() {
        return(
            <ProductButton onClick={this.props.addItem}>Adicionar ao carrinho</ProductButton>
        );
    }
}

export default BuyButton;
