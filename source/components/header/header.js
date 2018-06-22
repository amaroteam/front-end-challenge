import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
	render () {
		return (
			<div className="header">
				<h1>Amaro</h1>
				<span>carrinho</span>
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
