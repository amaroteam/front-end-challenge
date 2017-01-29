import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ProductListItemPrice from './ProductListItemPrice'
import defaultImage from '../assets/images/default.jpg'

export default class ProductListItem extends Component {
	static propTypes = {
		product: PropTypes.object,
		id: PropTypes.number,
	}

	render() {
		const { product, id, addToCart } = this.props
		const sale = product.on_sale
			? <span className="catalog__sale">Sale</span>
			: null

		// Setting a placeholder image id no image is present
		if (!product.image.length)
			product.image= defaultImage

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
			<button className="catalog__buy" onClick={() => addToCart(id, 1) }>
				Comprar
			</button>
		</li>
	}
}