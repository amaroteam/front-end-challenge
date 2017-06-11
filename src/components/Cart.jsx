import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import CartStore from '../stores/Cart.js';

export default class Cart extends Component {
	static propTypes = {
		get: PropTypes.func,
		allProducts: PropTypes.array,
		remove: PropTypes.func
	}

	static defaultProps = {
		get: () => {},
		allProducts: [],
		remove: () => {}
	}

	constructor(props) {
		super(props);
		this.state = {
			products: [],
			showList: false
		};

		this.onChange = this.onChange.bind(this);
		this.toggleList = this.toggleList.bind(this);
		this.remove = this.remove.bind(this);
	}

	componentDidMount() {
		CartStore.listen(this.onChange);
		this.props.get();
	}

	componentWillUnmount() {
		CartStore.unlisten(this.onChange);
	}

	onChange(store) {
		this.setState({
			products: store.products
		});
	}

	toggleList() {
		this.setState({
			showList: !this.state.showList
		});
	}

	remove(evt) {
		this.props.remove(this.state.products[evt.target.dataset.idPosition])
	}

	renderProductsList() {
		const products = this.props.allProducts;
		
		if(!products.length || !this.state.products.length)
			return null;

		return this.state.products.map((id, i) => {
			return <li key={ i } className="product"><a className="link" href={ `#p${id}` }>{ products[id].name }</a><span className="remove" data-id-position={ i } onClick={ this.remove }>X</span></li>
		})
	}

	render() {
		const styleHeight = this.state.showList ? {height: this.state.products.length * 25} : {};
		return (<div className="cart-box">
			<span className="mycart" onClick={ this.toggleList }>Meu carrinho ({ this.state.products.length })</span>
			<ul className={ `products ${this.state.showList ? 'open' : ''}` } style={ styleHeight }>{ this.renderProductsList() }</ul>
		</div>);
	}
}