import React, { Component } from 'react';
import { connect } from 'react-redux';
import { products } from '../data/products.json';
import ProductCard from './ProductCardComponent'

class Catalog extends Component {
  render() {

    const { shoppingCartProducts } = this.props;
    return (
      <div>
        {products.map((product, id) => {
          return (
            <ProductCard key={id} product={product} isOnShoppingCart={shoppingCartProducts.find(currProduct => currProduct.product.name === product.name) !== undefined}/> // como o json de produtos não tem id para ser identificado, estou usando o nome
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shoppingCartProducts: state.shoppingCart.products
})

export default connect(mapStateToProps)(Catalog)
