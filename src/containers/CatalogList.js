import { connect } from 'react-redux';
import CatalogList from '../components/CatalogList';
import { getProducts } from '../reducers/products';

const mapStateToProps = (state, props) => {
    state.products.forEach(function(product, index) {
        product.id = 1 + index++;
        if (product.image === '' || product.image === undefined) {
            product.image = '/images/produtoIndisponivel.jpg';
        }
    }, this);
    
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(CatalogList);
