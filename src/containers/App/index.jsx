import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import * as CartActions from '../../actions/cart';

class App extends PureComponent {
    componentDidMount() {
        this.props.actions.getCartItems();
    }

    render() {
        const { cart } = this.props.state;

        return (
            <div className="app">
                <Header
                    count={cart.count} />
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
        }, dispatch)
    })
)(App));