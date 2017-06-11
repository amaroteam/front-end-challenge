import React from 'react';
import { Component } from 'react';
import Showcase from './components/Showcase.jsx';
import ShowcaseActions from './actions/Showcase.js';
import Cart from './components/Cart.jsx';
import CartActions from './actions/Cart.js';

import ProductActions from './actions/Product.js';
import ProductStore from './stores/Product.js';

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		ProductStore.listen(this.onChange);
		ProductActions.get();
	}

	componentWillUnmount() {
		ProductStore.unlisten(this.onChange);
	}

	onChange(store) {
		this.setState({
			allProducts: store.allProducts
		});
	}

	addCart(id) {
		CartActions.add(id);
	}

	removeCart(id) {
		CartActions.remove(id);
	}

	getCartProducts() {
		CartActions.get();
	}

	render() {
		const products = this.state.allProducts;
		return (<div>
			<h1 className="site-name">Amaro</h1>
			<Cart get={ this.getCartProducts } allProducts={ products } remove={ this.removeCart } />
			<Showcase list={ this.listShowcase } toCart={ this.addCart } allProducts={ products } />
		</div>);
	}
}