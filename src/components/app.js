import React, { Component } from 'react';

import ProductsList from './products_list';
import CartButton from './cart_btn';
import CartList from './cart_list';

class App extends Component {
  render() {
    return (
			<div>
				<ProductsList />
        <CartList />
				<CartButton />
			</div>
    );
  }
}

export default App;
