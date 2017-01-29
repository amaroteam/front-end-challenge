import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Header from '../components/ui/Header'
// Stylesheets
import baseStl from '../styles/base.styl'
import footerStl from '../styles/footer.styl'

const App = ({ children }) =>
	<main>
		<Header/>
		{ children }
		<footer className={ 'footer' }>
			<Link to="/product">test</Link>
		</footer>
	</main>

App.propTypes = {
	children: PropTypes.object
}

export default App