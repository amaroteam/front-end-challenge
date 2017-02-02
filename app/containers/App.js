import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// Local imports
import Header from '../components/ui/Header'
// Stylesheets
import baseStl from '../styles/base.styl'
import footerStl from '../styles/footer.styl'
import animationsStl from '../styles/animations.styl'

/*
	I'm pretty sure it's not the right way to acces cartLength state. 
	I'm running out of time.
	Leaving this comment to fix this latter.
*/

@connect(state => ({
	cartLength: state.amaro.cartLength
}))
export default class App extends Component {
	static propTypes = {
		children: PropTypes.object
	}

	render() {
		const { children, location, cartLength } = this.props
		const anim = location.pathname === '/' ? 'slideInRight' : 'slideInLeft'

		console.log( this.props)
		return <main>
			<Header cartLength={ cartLength }/>
			<ReactCSSTransitionGroup
				component="div"
				transitionName={ anim }
				transitionEnterTimeout={ 500 }
				transitionLeaveTimeout={ 500 }
			>
				{ React.cloneElement(children, { key: location.pathname }) }
			</ReactCSSTransitionGroup>
			<footer className={ 'footer' }>
				<Link to="/product">test</Link>
			</footer>
		</main>
	}
}