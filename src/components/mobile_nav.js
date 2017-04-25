import React, { Component } from 'react';

class MobileNav extends Component {
  render() {
    return (
      <nav className="mobile-menu">
				<button className="btn">Filtro: Tudo</button>
				<button className="btn btn-cart">
					Carrinho
					<span className="cart-qtd">12</span>
				</button>
			</nav>
    );
  }
}

export default MobileNav;
