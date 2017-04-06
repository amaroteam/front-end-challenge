import React, { Component } from 'react';

import Product from './Product.jsx';

class ProductList extends Component {
    render() {
        var {products} = this.props;        

        var renderProducts = () => {
            return products.map((product) => {
                return <Product key={product.id} {...product} />
            })
        }

        return (
            <div>
                {renderProducts()}
            </div>
        );
    }
}

export default ProductList;