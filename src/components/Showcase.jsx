import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import ShowcaseStore from '../stores/Showcase.js';
import Product from './Product.jsx';



export default class Showcase extends Component {
	static propTypes = {
		list: PropTypes.func
	}

	static defaultProps = {
		list: () => {}
	}
	constructor(props) {
		super(props);
		this.state = {};
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		ShowcaseStore.listen(this.onChange);
		this.props.list();
	}

	componentWillUnmount() {
		ShowcaseStore.unlisten(this.onChange);
	}

	onChange(store) {
		if(store.products)
			this.setState({products: store.products});
		else if(store.error)
			this.setState({error: store.error});

		console.table(store.products);
	}


	renderProducts(products) {
		if(!products)
			return null;

		return products.map((product, i) => <Product key={ i } {...product} />);
	}

	render() {
		const products = this.renderProducts(this.state.products);
		const err = (<div>Erro: { this.state.error }</div>);

		return (<div className="showcase-box">{ products || err }</div>);
	}
}