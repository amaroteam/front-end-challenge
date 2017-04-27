import React, { Component } from 'react';

import CartButton from './cart_btn';
import ProductsList from './products_list';

class App extends Component {
  render() {
    return (
			<div>
				<ProductsList />
				<CartButton />
			</div>
    );
  }
}

export default App;
