import React, { Component, PropTypes } from 'react'

export default class ProductListItemSizes extends Component {
	static propTypes = {
		sizes: PropTypes.array,
		updateSize: PropTypes.func,
		fromModal: PropTypes.bool
	}

	render() {
		const { sizes, updateSize, fromModal } = this.props

		if (fromModal) {
			return <ProductListItemSizesModal
				sizes={ sizes }
				updateSize={ updateSize }
			/>
		}

		return <ProductListItemSizesDefault
			sizes={ sizes }
			updateSize={ updateSize }
		/>
	}
}

class ProductListItemSizesModal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selected: props.sizes[0].sku
		}
	}

	static propTypes = {
		sizes: PropTypes.array,
		updateSize: PropTypes.func
	}

	_clickHandler(size) {
		this.setState({ selected: size.sku })

		this.props.updateSize(size)
	}

	render() {
		const { sizes, updateSize} = this.props

		return <ul className={ 'catalog__sizes' }>
			{sizes.map((size, i) => {
				if (!size.available)
					return null

				let className = this.state.selected === size.sku ? 'catalog__size selected' : 'catalog__size'

				return <li className={ className } key={ 'sz' + i }
					onClick={ () => this._clickHandler(size) }
				>
					{ size.size }
				</li>
			})}
		</ul>
	}
}

class ProductListItemSizesDefault extends Component {
	static propTypes = {
		sizes: PropTypes.array
	}

	render() {
		const { sizes } = this.props

		return <ul className={ 'catalog__sizes' }>
			{sizes.map((size, i) => {
				if (!size.available || size.size === 'U')
					return null

				return <li className="catalog__size" key={ 'sz' + i }>
					{ size.size }
				</li>
			})}
		</ul>
	}
}