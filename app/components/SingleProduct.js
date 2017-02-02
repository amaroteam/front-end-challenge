import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import productStl from '../styles/product.styl'
import ProductListItemPrice from './product/ProductListItemPrice'

export default class SingleProduct extends Component {
	static propTypes = {
		product: PropTypes.object
	}

	render() {
		const { product, id, addToCart } = this.props
		const sale = product.on_sale
			? <span className="catalog__sale">Sale</span>
			: null

		// Setting a placeholder image id no image is present
		if (!product.image.length)
			product.image= 'http://i.imgur.com/XCueuHh.jpg'

		return <div className="product">
			<h4 className="product__name">
				{ product.name }
			</h4>
			<div className="product__info">
				<img src={ product.image } title={ product.name } className="product__image"/>
				<div className="product__content">
					<ProductListItemPrice actualPrice={ product.actual_price } regularPrice={ product.regular_price }/>
					<button className="product__buy" onClick={() => addToCart(id) }>
						Comprar
					</button>
				</div>
			</div>
		</div>
		return <li className='catalog__item'>
			<Link to={ `/product/${ id }` }>
				{ sale }
				<img src={ product.image } title={ product.name } className="catalog__image"/>
				<div className="catalog__content">
					<h4 className="catalog__name">
						{ product.name }
					</h4>
					<ProductListItemPrice actualPrice={ product.actual_price } regularPrice={ product.regular_price }/>
				</div>
				
			</Link>
		</li>
	}
}