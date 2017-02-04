import React, { Component, PropTypes } from 'react'

export default class ProductListItemSale extends Component {
	static propTypes = {
		onSale: PropTypes.bool,
		discount: PropTypes.string
	}

	render() {
		const { onSale, discount } = this.props

		if (!onSale)
			return null

		return <span className="catalog__sale">{ discount }</span>
	}
}