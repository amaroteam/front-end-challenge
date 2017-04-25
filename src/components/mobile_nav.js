import React, { Component } from 'react';

class MobileNav extends Component {
  render() {
    return (
      <nav className="mobile-menu">
				<button className="btn">Filter: All</button>
				<button className="btn btn-cart">
					Cart
					<span className="cart-qtd">12</span>
				</button>
			</nav>
    );
  }
}

export default MobileNav;
