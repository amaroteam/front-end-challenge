import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import LazyLoad from 'react-lazyload'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal'
// Local imports
import ProductListItemPrice from './ProductListItemPrice'
import ProductListItemSale from './ProductListItemSale'
import ProductListItemSizes from './ProductListItemSizes'
import ProductListItemModal from './ProductListItemModal'
import defaultImage from '../../assets/images/default.jpg'
import loadingImage from '../../assets/images/loading.gif'

export default class ProductListItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			floating: false
		}

		this._openModal = this._openModal.bind(this)
	}

	static propTypes = {
		product: PropTypes.object,
		id: PropTypes.number
	}

	_openModal() {
		const { product, id, addToCart } = this.props

		ModalManager.open(
			<ProductListItemModal product={ product } addToCart={ addToCart } id={ id }/>
		)
	}

	render() {
		const { product, id, addToCart } = this.props
		let { floating } = this.state

		// Setting a placeholder image id no image is present
		if (!product.image.length)
			product.image = defaultImage

		return <li className='catalog__item'>
			<ProductListItemSale
				onSale={ product.on_sale }
				discount={ product.discount_percentage }
			/>
			<LazyLoad
				placeholder={ <img src={ loadingImage } title={ product.name } className="catalog__image"/> }
			>
				<img src={ product.image } title={ product.name } className="catalog__image"/>
			</LazyLoad>
			<ProductListItemSizes sizes={ product.sizes } fromModal={ false }/>
			<div className="catalog__content">
				<h4 className="catalog__name">
					{ product.name }
				</h4>
				<ProductListItemPrice actualPrice={ product.actual_price } regularPrice={ product.regular_price }/>
			</div>
			<button className="catalog__buy" onClick={ this._openModal }>
				Comprar
			</button>
		</li>

		// disabled \/
		return <li className='catalog__item'>
			<Link to={ `/product/${ id }` }>
				<ProductListItemSale
					onSale={ product.on_sale }
					regularPrice={ product.regular_price }
					actualPrice={ product.actual_price }
				/>
				<LazyLoad
					placeholder={ <img src={ loadingImage } title={ product.name } className="catalog__image"/> }
				>
					<img src={ product.image } title={ product.name } className="catalog__image"/>
				</LazyLoad>
				<ProductListItemSizes sizes={ product.sizes } fromModal={ false }/>
				<div className="catalog__content">
					<h4 className="catalog__name">
						{ product.name }
					</h4>
					<ProductListItemPrice actualPrice={ product.actual_price } regularPrice={ product.regular_price }/>
				</div>
			</Link>
			<button className="catalog__buy" onClick={ this._openModal }>
				Comprar
			</button>
		</li>
	}
}