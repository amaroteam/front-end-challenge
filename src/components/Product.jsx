import React from 'react';
import { Component } from 'react';

export default class Product extends Component {


	renderName({name}) {
		return <h2 className="name">{ name }</h2>;
	}

	renderPrice({actual_price, regular_price, discount_percentage}) {
		return <em className="price">({ actual_price || regular_price })</em>;
	}

	renderSizes({sizes}) {
		if(!sizes || !sizes.length)
			return null;
		return <em className="sizes">Tamanhos: { sizes.map(({size}) => size).join(',') }</em>
	}

	renderImage({image, name}) {
		if(!image)
			return null;

		return <img src={ image } alt={ `Foto de ${name}` } className="image" />
	}

	renderCartButton() {
		return <button type="button" className="tocart">Adicionar ao carrinho</button>;
	}

	render() {
		const { props } = this;
		const onSale = props.on_sale ? 'onsale' : '';
		return (<div className={ `product-box ${onSale}` }>
			{ this.renderName(props) }
			{ this.renderPrice(props) }
			{ this.renderSizes(props) }
			{ this.renderImage(props) }
			{ this.renderCartButton() }
		</div>);
	}
}