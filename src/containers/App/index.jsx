import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import * as CartActions from '../../actions/cart';
import * as ProductActions from '../../actions/products';

class App extends Component {
    componentDidMount() {
        this.props.actions.getCartItems();
    }

    render() {
        const { cart } = this.props.state;
        const { searchProduct } = this.props.actions;

        return (
            <div className="app">
                <Header
                    count={cart.count}
                    search={searchProduct} />
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({ state }),
    dispatch => ({
        actions: bindActionCreators({
            ...CartActions,
            ...ProductActions,
        }, dispatch)
    })
)(App));