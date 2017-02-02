import React, { Component, PropTypes } from 'react'
import catalogStl from '../styles/catalog.styl'
import modalStl from '../styles/modal.styl'
import ProductListItem from './product/ProductListItem'

export default class ProductList extends Component {
	static propTypes = {
		products: PropTypes.array
	}

	render() {
		const { products, addToCart } = this.props

		return <section className="catalog">
			<div className="catalog__filter">
				<h3>filter goes here</h3>
			</div>
			<ul className="catalog__list">
				{products.map((product, i) => 
					<ProductListItem key={ `prdct ${i}` } product={ product } addToCart={ addToCart } id={ i }/>
				)}
			</ul>
		</section>
	}
}