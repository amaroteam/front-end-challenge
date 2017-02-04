import React, { Component, PropTypes } from 'react'
import headerStl from '../../styles/header.styl'

export default class Header extends Component {
	static propTypes = {
		cartLength: PropTypes.number,
		toggleCart: PropTypes.func
	}

	render() {
		const { cartLength, toggleCart } = this.props

		return <header className="header">
			<div className="header__content">
				<div className="header__brand">
					<h3 className="header__name">
						the<b>Fashion</b>
					</h3>
				</div>
				<button className="header__cart fa fa-shopping-cart" onClick={ () => toggleCart() }>
					<span className="header__counter">{ cartLength }</span>
				</button>	
			</div>
		</header>
	}
}