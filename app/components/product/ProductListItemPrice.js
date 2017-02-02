import React, { Component, PropTypes } from 'react'

export default class ProductListItemPrice extends Component {
	static propTypes = {
		actualPrice: PropTypes.string,
		regularPrice: PropTypes.string,
	}

	render() {
		const { actualPrice, regularPrice } = this.props

		if (actualPrice === regularPrice)
			return <div className="catalog__price">
				<span className="catalog__value">
					{ actualPrice }
				</span>
			</div>

		return <div className="catalog__price">
			<span className="catalog__value catalog__value--old">
				{ regularPrice }
			</span>
			<span className="catalog__value">
				{ actualPrice }
			</span>
		</div>
	}
}