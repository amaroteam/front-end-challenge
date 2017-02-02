import React, { Component, PropTypes } from 'react'

export default class ProductListItemSale extends Component {
	static propTypes = {
		onSale: PropTypes.bool,
		actualPrice: PropTypes.string,
		regularPrice: PropTypes.string,
	}

	_getDiscount() {
		let rgxp = /(?:R\$)\ ([0-9]+),([0-9]+)/
		let regularMatch = this.props.regularPrice.match(rgxp)
		let actualMatch = this.props.actualPrice.match(rgxp)
		let discount = 0

		if (regularMatch.length < 3 || actualMatch.length < 3 )
			return discount

		discount = parseFloat(regularMatch[1] + '.' + regularMatch[2]) -
			parseFloat(actualMatch[1] + '.' + actualMatch[2])
		
		return discount.toFixed(0)
	}

	render() {
		const { onSale } = this.props
		const discount = this._getDiscount()

		if (!onSale)
			return null

		return <span className="catalog__sale">{ discount }%</span>
	}
}