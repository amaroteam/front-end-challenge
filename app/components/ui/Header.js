import React, { Component } from 'react'
import headerStl from '../../styles/header.styl'

export default class Header extends Component {
	render() {
		return <header className="header">
			<div className="header__content">
				<div className="header__brand">
					<h3 className="header__name">
						the<b>Fashion</b>
					</h3>
				</div>
				<button className="header__cart fa fa-shopping-cart"></button>	
			</div>
		</header>
	}
}