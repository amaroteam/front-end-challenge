import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './cardItem';

class Card extends React.Component {
	constructor (props) {
		super(props);
	}

	renderCardItem () {
		const data = this.props.products;
		let cardList = [];

		data.map((item, i) => {
			cardList.push(<CardItem key={i} product={item} />);
		});

		return cardList;
	}

	render () {
		return (
			<ul className="card__container">
				{this.renderCardItem()}
			</ul>
		);
	}
}

Card.propTypes = {
	products: PropTypes.array
};

module.exports = Card;
