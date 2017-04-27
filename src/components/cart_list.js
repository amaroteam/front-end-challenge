import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartList extends Component {
  renderList() {
    if (this.props.cart.items.length > 0) {
      return this.props.cart.items.map((product, index) => {
        return (
          <div key={index}>{product.name}</div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <div className={`cart-container ${(this.props.cart.show) ? 'show' : ''}`}>
        <ul className="cart-list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(CartList);
