import React, { Component } from 'react';

class ProductsCard extends Component {
  render() {
    return (
			<div className="product-card">
				<div>Image</div>
				<div>Name</div>
				<div>Price</div>
				<div>Promo Price</div>
			</div>
    );
  }
}

export default ProductsCard;
