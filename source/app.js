import React from 'react';
import data from '../products.json';
import Header from './components/header/header';
import Catalog from './components/catalog/catalog';
import { connect } from 'react-redux';

class App extends React.Component {
	render () {
		return (
			<div className="container">
				<Header />
				<Catalog products={data.products} />
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
