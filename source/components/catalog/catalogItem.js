import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UpdateCart } from '../../actions/cartAction';

class CatalogItem extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			itemSize: null,
			showError: false
		};
	}

	selectSize (e, size) {
		e.preventDefault();
		this.setState({
			itemSize: size,
			showError: false
		});
	}

	getAvailableSizes (sizes) {
		let sizeList = [];

		sizes.map((item, i) => {
			item.available && sizeList.push(
				<a href="#" key={i} className={`size ${this.state.itemSize === item.size ? 'selected' : ''}`} onClick={(e) => this.selectSize(e, item.size)}>{item.size}</a>
			);
		});

		return sizeList;
	}

	addToCart (product) {
		if (this.state.itemSize) {
			let item = {
				name: product.name,
				image: product.image,
				regular_price: product.regular_price,
				actual_price: product.actual_price,
				quantity: 1
			};
			let cart = this.props.cart.concat(item);
			this.props.funcUpdateCart(cart);
		} else {
			this.setState({
				showError: true
			});
		}
	}

	render () {
		const product = this.props.product;
		const fallbackImage = '//dummyimage.com/470x594/fff/000?text=imagem indisponível';
		const {showError} = this.state;

		return (
			<li className="catalog__product-item">
				{product.on_sale &&
					<span className="stamp">{product.discount_percentage} OFF</span>
				}
				<img src={product.image} onError={(e) => {e.target.src = fallbackImage}} className="product-image" />
				<p className="product-name">{product.name}</p>
				<p className="product-price">
					{product.on_sale &&
						<del className="regular-price">{product.regular_price}</del>
					}
					<span className="actual-price">{product.actual_price}</span>
					<span className="installments">em até {product.installments}</span>
				</p>
				<p className="product-sizes">{this.getAvailableSizes(product.sizes)}</p>
				{showError &&
					<span className="select-size">Selecione um tamanho.</span>
				}
				<button className="button__AddToCart" onClick={() => this.addToCart(product)}>Adicionar à sacola</button>
			</li>
		);
	}
}

CatalogItem.propTypes = {
	product: PropTypes.object
};

function mapStateToProps({cart}) {
	return {
		cart
	}
}

function mapDispatchToProps(dispatch) {
	return {
		funcUpdateCart: (item) => dispatch(UpdateCart(item))
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
