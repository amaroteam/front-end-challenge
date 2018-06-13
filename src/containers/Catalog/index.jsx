import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import ProductTile from '../../components/ProductTile';
import * as ProductActions from '../../actions/products';
import * as CartActions from '../../actions/cart';

const ProductsWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 75px;
`

class Catalog extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    render() {
        const { products } = this.props.state;
        const { addItem } = this.props.actions;

        return(
            <ProductsWrapper>
                {products.items.map((product, key) => (
                    <ProductTile
                        key={key}
                        product={product}
                        addItem={addItem}
                    />
                ))}
            </ProductsWrapper>
        );
    }
}

export default withRouter(connect(
    state => ({ state }),
    dispatch => ({
        actions: bindActionCreators({
            ...ProductActions,
            ...CartActions,
        }, dispatch)
    })
)(Catalog));
