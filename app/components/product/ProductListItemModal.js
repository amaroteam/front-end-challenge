import React, { Component, PropTypes } from 'react'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal'
// Local imports
import ProductListItemSizes from './ProductListItemSizes'

export default class ProductListItemModal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selected: props.product.sizes[0].sku
		}

		this._updateSize = this._updateSize.bind(this)
		this._closeAndAddToCart = this._closeAndAddToCart.bind(this)
	}

	static propTypes = {
		product: PropTypes.object,
		addToCart: PropTypes.func
	}

	_updateSize(size) {
		console.log(size)
		this.setState({ selected: size.sku })
	}

	_closeAndAddToCart(id, amount, size) {
		console.log(size)
		ModalManager.close()
		this.props.addToCart(id, amount, size)
	}

	render() {
		const { product, addToCart, id } = this.props
		let { size } = this.state

		return <div className="modal__wrapper">
			<Modal
				onRequestClose={ () => true }
				effect={ Effect.SlideFromBottom }
			>
				<div className="modal">
					<button onClick={ ModalManager.close } className="modal__close fa fa-times"/>
					<h3 className="modal__title">{ product.name }</h3>
					<ProductListItemSizes sizes={ product.sizes } updateSize={ this._updateSize } fromModal={ true }/>
					<button className="catalog__buy" onClick={ () => this._closeAndAddToCart(id, 1, size) }>
						Adicionar ao carrinho
					</button>
				</div>
			</Modal>
		</div>
	}
}