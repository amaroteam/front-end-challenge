import React from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';

class Cart extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			cartTotal: 0
		};
	}

	renderCartItems (cart) {
		const item = [];

		cart.map((product, i) => {
			item.push(<CartItem key={i} pos={i} product={product} />);
		});

		return item;
	}

	renderGrandTotal () {
		let { cart } = this.props;
		const prices = [];

		cart.map((item) => {
			let floatPrice = item.actual_price.replace('R$','').replace(',','.');

			prices.push(floatPrice * item.quantity);
		});

		return (
			<p className="grand-total">
				<span>Total:</span> R$ {prices.reduce((a, b) => a + b).toFixed(2)}
			</p>
		);
	}

	render () {
		const { cart } = this.props;
		const isCartEmpty = cart.length === 0 ? true : false;

		return (
			<div className="cart__container">
				{isCartEmpty ?
					<p className="empty-cart">carrinho vazio</p>
				:
					<React.Fragment>
						<ul className="cart__items">
							{this.renderCartItems(cart)}
						</ul>
						{this.renderGrandTotal()}
					</React.Fragment>
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

module.exports = connect(mapStateToProps)(Cart);

