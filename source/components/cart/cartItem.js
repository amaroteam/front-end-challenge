import React from 'react';
import { connect } from 'react-redux';
import { UpdateCart } from '../../actions/cartAction';

class CartItem extends React.Component {
	constructor (props) {
		super(props);
	}

	removeFromCart (e, pos) {
		e.preventDefault();

		let { cart, funcUpdateCart } = this.props;

		cart.splice(pos, 1);
		funcUpdateCart([...cart]);
	}

	changeQuantity (e, type, pos) {
		e.preventDefault();

		let { cart, funcUpdateCart } = this.props;
		let itemQty = cart[pos].quantity;

		if (type === 'minus' && itemQty > 1) {
			cart[pos].quantity -= 1;
			funcUpdateCart([...cart]);
		} else if (type === 'plus') {
			cart[pos].quantity += 1;
			funcUpdateCart([...cart]);
		}
	}

	render () {
		let { product, pos } = this.props;
		const fallbackImage = '//dummyimage.com/470x594/fff/000?text=imagem indisponível';

		return (
			<li>
				<img src={product.image} onError={(e) => {e.target.src = fallbackImage}} className="product-image" />
				<div>
					<p className="product-name">{product.name}</p>
					<p className="product-price">
						<del>{product.regular_price}</del>
						{product.actual_price}
					</p>
					<p className="quantity">
						<a href="#" className="ico-minus" onClick={(e) => this.changeQuantity(e, 'minus', pos)}>+</a>
						{product.quantity}
						<a href="#" className="ico-plus" onClick={(e) => this.changeQuantity(e, 'plus', pos)}>-</a>
					</p>
				</div>
				<a href="#" title="remover do carrinho" className="ico-remove" onClick={(e) => this.removeFromCart(e, pos)}>remover</a>
			</li>
		);
	}
}

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


module.exports = connect(mapStateToProps, mapDispatchToProps)(CartItem);
