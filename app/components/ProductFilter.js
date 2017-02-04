import React, { Component, PropTypes } from 'react'
import filterStl from '../styles/filter.styl'

export default class ProductFilter extends Component {
	static propTypes = {
		filterBy: PropTypes.func,
		filter: PropTypes.string
	}

	_filterBy(filter) {
		this.props.filterBy(filter)
	}

	_getClass(current, filter) {
		if (current === filter)
			return ' active'

		return ''
	}

	render() {
		const { filterBy, filter } = this.props

		return <div className="filter">
			<div className="filter__content">
				<button className={'filter__item' + this._getClass(filter, 'all') } onClick={ () => this._filterBy('all') }>Todos</button>
				<button className={'filter__item' + this._getClass(filter, 'sale') }  onClick={ () => this._filterBy('sale') }>Promoção</button>
			</div>
		</div>
	}
}