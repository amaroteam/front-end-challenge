import React from 'react';
import data from '../products.json';
import Header from './components/header/header';
import Card from './components/card/card';
import { connect } from 'react-redux';

class App extends React.Component {
	render () {
		return (
			<div className="container">
				<Header />
				<Card products={data.products} />
			</div>
		)
	}
}

function mapStateToProps({cart}) {
	return {
		cart
	}
}

module.exports = connect(mapStateToProps)(App);
