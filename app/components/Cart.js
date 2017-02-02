import React, { Component, PropTypes } from 'react'

export default class Cart extends Component {
	static propTypes = {
		items: PropTypes.array
	}

	render() {
		const { cartItems } = this.props

		// return null
		return <div>
			<h3>Cart Items</h3>
			<ul>
				{cartItems.map((item, i) => 
					<li key={ `crt ${i}` }>
						<span>{ item.name }</span>
						<span> - { item.amount }</span>
					</li>
				)}
			</ul>
		</div>
	}
}