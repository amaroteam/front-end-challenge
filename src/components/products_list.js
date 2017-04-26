import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductsList extends Component {
  renderList() {
    return this.props.products.map((product) => {
      return (
        <li
          key={product.name}
          className="product-card">
          <div>Image</div>
          <div>{product.name}</div>
        </li>
      );
    });
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

export default connect(mapStateToProps)(ProductsList);
