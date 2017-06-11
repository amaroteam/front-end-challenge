import React from 'react';
import { Component } from 'react';
import Showcase from './components/Showcase.jsx';
import ShowcaseActions from './actions/Showcase.js';

export default class Page extends Component {
	listShowcase() {
		ShowcaseActions.getProducts();
	}

	render() {
		return (<div>
			<h1 className="site-name">Amaro</h1>
			<Showcase list={ this.listShowcase } />
		</div>);
	}
}