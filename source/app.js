import React from 'react';
import data from '../products.json';
import Card from './components/card';

class App extends React.Component {
	render () {
		return (
			<div className="container">
				<Card products={data.products} />
			</div>
		)
	}
}

export default App;
