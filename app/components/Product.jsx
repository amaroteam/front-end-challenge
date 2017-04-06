import React, { Component } from 'react';

class Product extends Component {
    render() {
        var {name} = this.props;

        return (
            <div className="product-container">
                {name}
            </div>
        );
    }
}

export default Product;