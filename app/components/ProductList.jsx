import React, { Component } from 'react';

import Product from './Product.jsx';

class ProductList extends Component {
    render() {
        var {products} = this.props;        

        var renderProducts = () => {
            return products.map((product, index) => {
                return (
                    <div className="col-xs-6">
                        <Product key={product.id} {...product} />
                    </div>
                )
            })
        }

        return (
            <div>
                <div className="row">
                    {renderProducts()}
                </div>
            </div>
        );
    }
}

export default ProductList;