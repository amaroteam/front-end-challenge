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

	handleClick () {
		this.setState({
			showCart: !this.state.showCart
		});
	}

	render () {
		return (
			<div className="header">
				<h1>Amaro</h1>
				<a href="#" className="ico-cart" onClick={() => this.handleClick()}>{this.props.cart.length}</a>
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
