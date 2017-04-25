import React, { Component } from 'react';

import MobileNav from './mobile_nav';
import ProductsList from './products_list';

class App extends Component {
  render() {
    return (
			<div>
				<ProductsList />
				<MobileNav />
			</div>
    );
  }
}

export default App;
