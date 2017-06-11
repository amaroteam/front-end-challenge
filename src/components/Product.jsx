import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
	static propTypes = {
		toCart: PropTypes.func
	}

	static defaultProps = {
		toCart: () => {}
	}

	constructor(props) {
		super(props);

		this.toCart = this.toCart.bind(this);
	}

	renderName({name}) {
		return <h2 className="name">{ name }</h2>;
	}

	renderPrice({actual_price, regular_price, discount_percentage}) {
		if(actual_price !== regular_price)
			return (<span className="price">
				De <del>{ regular_price }</del> por { actual_price } <em>({ discount_percentage } de desconto)</em>
			</span>);

		return <span className="price">{ actual_price || regular_price }</span>;
	}

	getAvailableSizes(sizes) {
		return sizes.filter(({available}) => available)
					.map(({size}) => size)
					.join(',');
	}

	renderSizes({sizes}) {
		if(!sizes || !sizes.length)
			return null;

		return <span className="sizes">Tamanhos disponíveis: { this.getAvailableSizes(sizes) }</span>
	}

	renderImage({image, name}) {
		if(!image)
			return null;

		const alt = name ? `Foto de ${name}` : '';

		return <img src={ image } alt={ alt } className="image" />
	}

	toCart() {
		this.props.toCart(this);
	}

	renderCartButton() {
		return <button type="button" className="tocart" onClick={ this.toCart }>Adicionar ao carrinho</button>;
	}

	render() {
		const { props } = this;
		const onSale = props.on_sale ? 'onsale' : '';
		return (<div className={ `product-box ${onSale}` } id={ `p${props.id}` }>
			{ this.renderImage(props) }
			{ this.renderName(props) }
			{ this.renderPrice(props) }
			{ this.renderSizes(props) }
			{ this.renderCartButton() }
		</div>);
	}
}