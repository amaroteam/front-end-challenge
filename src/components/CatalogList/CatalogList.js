import React, { Component }from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

class CatalogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onSaleSelected: false
        }
    }

    render() {
        const { products } = this.props;
        const filterBy = () => {
            if (this.state.onSaleSelected) {
                return product => product.on_sale;
            }
            return product => product;
        }
        return (
            <div className="mdl-grid">
                <div className="mdl-grid mdl-cell mdl-cell--12-col">
                    <p className={"btn-buy"} onClick={() => this.setState({onSaleSelected: !this.state.onSaleSelected})}>
                        {this.state.onSaleSelected ? "Listar todos" : "Promoções"}
                    </p>
                </div>
                <div className="mdl-grid">
                    {products.filter(filterBy()).map((product, id) => {
                        return (
                            <div className="mdl-card mdl-cell mdl-cell--2-col mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-shadow--2dp"
                                key={product.id}>
                                <Product {...product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

CatalogList.propTypes = {
    products: PropTypes.array,
}

export default CatalogList;
