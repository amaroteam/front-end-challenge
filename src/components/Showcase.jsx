import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import ShowcaseStore from '../stores/Showcase.js';
import Product from './Product.jsx';



export default class Showcase extends Component {
	static propTypes = {
		allProducts: PropTypes.array,
		toCart: PropTypes.func
	}

	static defaultProps = {
		allProducts: [],
		toCart: () => {}
	}
	constructor(props) {
		super(props);

		this.state = {
			products: props.allProducts
		};
		this.onChange = this.onChange.bind(this);
		this.toCart = this.toCart.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			products: nextProps.allProducts
		});
	}

	componentDidMount() {
		ShowcaseStore.listen(this.onChange);
	}

	componentWillUnmount() {
		ShowcaseStore.unlisten(this.onChange);
	}

	onChange(store) {
		// if(store.products)
		// 	this.setState({products: store.products});
		// else if(store.error)
		// 	this.setState({error: store.error});

	}

	toCart(evt) {
		this.props.toCart(evt.props.id);
	}

	renderProducts(products) {
		if(!products)
			return null;

		return products.map((product, i) => <Product key={ i } {...product} id={ i } toCart={ this.toCart } />);
	}

	render() {
		const products = this.renderProducts(this.state.products);
		const err = (<div>Erro: { this.state.error }</div>);

		return (<div className="showcase-box">{ products || err }</div>);
	}
}