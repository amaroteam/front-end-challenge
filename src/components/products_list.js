import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

import ProductsCard from './products_card';

class ProductsList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderList() {
    let counterId = 0;

    if (this.props.products) {
      return this.props.products.map((product) => {
        let cardId = counterId + 1;
        counterId++;

        return <ProductsCard key={cardId} className="product-card" product={product} />

        /*return (
          <li
            key={cardId}
            className="product-card">
            <div>Image</div>
            <div>{product.name}</div>
          </li>
        );*/
      });
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
