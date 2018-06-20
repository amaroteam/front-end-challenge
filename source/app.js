import React from 'react';
import data from '../products.json';
import Header from './components/header/header';
import Card from './components/card/card';

class App extends React.Component {
	render () {
		return (
			<div className="container">
				<Header />
				<Card products={data.products} />
			</div>
		)
	}
}

export default App;
