import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductsCard extends Component {
  handleClick() {
    console.log('click');
  } 

  render() {
    const product = this.props.product;
    let imageEl = <div className="no-image">No Image :(</div>;

    if (product.image) {
      imageEl = <img src={product.image} />;
    }

    return (
      <div className="product-card" onClick={this.handleClick}>
        {imageEl}
        <div className="product-name">{product.name}</div>
        <div className={`product-regular-price ${(product.on_sale) ? 'sale' : ''}`}>{product.regular_price}</div>
        <div className="product-price">{product.actual_price}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default ProductsCard;
