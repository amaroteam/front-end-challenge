import React from 'react';
import PropTypes from 'prop-types';
import CatalogItem from './catalogItem';

class Catalog extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			products: this.props.products,
			hasFilter: false
		};
	}

	handleFilter (e) {
		e.preventDefault();
		let { products } = this.props;
		let { hasFilter } = this.state;

		if (hasFilter) {
			this.setState({
				products: products,
				hasFilter: !hasFilter
			})
		} else {
			this.setState({
				products: products.filter((product) => product.on_sale === true),
				hasFilter: !hasFilter
			})
		}
	}

	renderCardItem () {
		const data = this.state.products;
		let cardList = [];

		data.map((item, i) => {
			cardList.push(<CatalogItem key={i} product={item} />);
		});

		return cardList;
	}

	render () {
		let { hasFilter } = this.state;
		return (
			<React.Fragment>
				<p className="filter">Filtrar por:
					<a href="#" className={hasFilter ? 'selected' : ''} onClick={(e) => this.handleFilter(e)}>promoção</a>
				</p>
				<ul className="catalog__container">
					{this.renderCardItem()}
				</ul>
			</React.Fragment>
		);
	}
}

Catalog.propTypes = {
	products: PropTypes.array
};

module.exports = Catalog;
