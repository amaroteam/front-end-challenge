import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

import ProductsCard from './products_card';

class ProductsList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderList() {
    if (this.props.products) {
      return this.props.products.map((product) => {
        return (
          <ProductsCard
            className="product-card"
            key={product.id}            
            product={product}
          />
        );
      });
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }

  render() {
    return (
      <ul className="products-list">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);
