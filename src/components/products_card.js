import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

class ProductsCard extends Component {
  onAddClick() {
    console.log(this);
    this.props.addProduct(this.props.product);
  } 

  render() {
    const product = this.props.product;
    let imageEl = <div className="no-image">No Image :(</div>;

    if (product.image) {
      imageEl = <div className={`product-image ${(product.on_sale) ? 'sale' : ''}`}><img src={product.image} /></div>;
    }

    return (
      <div className="product-card" onClick={this.onAddClick.bind(this)}>
        {imageEl}
        <div className="product-name">{product.name}</div>
        <div className={`product-regular-price ${(product.on_sale) ? 'sale' : ''}`}>{product.regular_price}</div>
        <div className="product-price">{product.actual_price}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state)
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps, { addProduct })(ProductsCard);
