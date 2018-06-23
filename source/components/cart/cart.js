import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
	renderCartItems () {
		return '';
	}

	renderGrandTotal () {
		return '';
	}

	render () {
		return (
			<div className="cart__container">
				{this.renderCartItems()}
				{this.renderGrandTotal()}
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

