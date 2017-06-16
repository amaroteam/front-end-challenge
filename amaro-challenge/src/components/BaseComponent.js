import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './HeaderComponent';

class Base extends Component {

  render() {
    return (
      <div>
        <Header cartProductsQuantity={this.props.cartProductsQuantity}/>
        {this.props.children}
        {/* TODO: footer */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartProductsQuantity: state.shoppingCart.products.length
})

export default connect(mapStateToProps)(Base);
