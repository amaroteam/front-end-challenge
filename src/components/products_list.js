import React, { Component } from 'react';

class ProductsList extends Component {
  render() {
    return (
      <ul className="products-list">
				<li className="product-card">
					<div>Image</div>
					<div>Name</div>
				</li>
			</ul>
    );
  }
}

export default ProductsList;
