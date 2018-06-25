import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart/cart';

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			showCart: false
		};
	}

	handleClick (e) {
		e.preventDefault();

		this.setState({
			showCart: !this.state.showCart
		});
	}

	render () {
		return (
			<div className="header">
				<h1>AMARO</h1>
				<a href="#" className="ico-cart" onClick={(e) => this.handleClick(e)}>{this.props.cart.length}</a>
				{this.state.showCart &&
					<Cart />
				}
			</div>
		);
	}
}

function mapStateToProps({cart}) {
	return {
		cart
	}
}

module.exports = connect(mapStateToProps)(Header);
