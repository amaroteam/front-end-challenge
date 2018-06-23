import React from 'react';
import PropTypes from 'prop-types';
import CatalogItem from './catalogItem';

class Catalog extends React.Component {
	constructor (props) {
		super(props);
	}

	renderCardItem () {
		const data = this.props.products;
		let cardList = [];

		data.map((item, i) => {
			cardList.push(<CatalogItem key={i} product={item} />);
		});

		return cardList;
	}

	render () {
		return (
			<ul className="catalog__container">
				{this.renderCardItem()}
			</ul>
		);
	}
}

Catalog.propTypes = {
	products: PropTypes.array
};

module.exports = Catalog;
