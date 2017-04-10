import React, { Component } from 'react';

import Product from './Product.jsx';

class ProductList extends Component {
    render() {
        var {products} = this.props;        

        var renderProducts = () => {
            return products.map((product, index) => {
                return (
                    <div className="col-xs-6 col-sm-4 col-md-3" key={index}>
                        <Product key={product.id} {...product} onAddToCart={this.props.onAddToCart} />
                    </div>
                )
            })
        }

        return (
            <div className="product-list-container">
                <div className="row">
                    {renderProducts()}
                </div>
            </div>
        );
    }
}

export default ProductList;