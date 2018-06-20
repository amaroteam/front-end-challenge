import React from 'react';
import PropTypes from 'prop-types';

class CardItem extends React.Component {
	constructor (props){
		super(props);
	}

	normalizePrice (value) {
		return parseFloat(value.replace('R$ ', '').replace(',', '.'));
	}

	getAvailableSizes (sizes) {
		let sizeList = [];

		sizes.map((item, i) => {
			item.available && sizeList.push(<a href="#" key={i} className="size">{item.size}</a>)
		});

		return sizeList;
	}

	addToCart (product) {
		console.log(product);
	}

	render () {
		const product = this.props.product;
		const fallbackImage = '//dummyimage.com/470x594/fff/000?text=imagem indisponível';

		return (
			<li className="card__product-item">
				{product.on_sale &&
					<span className="stamp">{product.discount_percentage} OFF</span>
				}
				<img src={product.image} onError={(e) => {e.target.src = fallbackImage}} className="product-image" />
				<p className="product-name">{product.name}</p>
				<p className="product-price">
					<span className="actual-price">{product.actual_price}</span>
					<span className="installments">{product.installments}</span>
				</p>
				<p className="product-sizes">{this.getAvailableSizes(product.sizes)}</p>
				<button className="button__AddToCart" onClick={() => this.addToCart(product)}>Adicionar à sacola</button>
			</li>
		);
	}
}

CardItem.propTypes = {
	product: PropTypes.object
};

module.exports = CardItem;
