import React from 'react';
import { connect } from 'react-redux';
import productsData from 'products';

import { loadProducts } from 'actions';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SystemNotifications from 'components/SystemNotifications';

export class App extends React.Component {
  static propTypes = {
    app: React.PropTypes.object.isRequired,
    cart: React.PropTypes.object.isRequired,
    children: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired,
    products: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    const props = this.props;

    if (!props.products.items.length) {
      props.dispatch(loadProducts(productsData.products));
    }
  }

  render() {
    const props = this.props;

    return (
      <div className="app">
        <Header
          cart={props.cart}
          dispatch={props.dispatch}
          location={props.location} />
        <main className="app__content">
          {this.props.children}
        </main>
        <Footer />
        <SystemNotifications app={props.app} dispatch={props.dispatch} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    cart: state.cart,
    products: state.products
  };
}

export default connect(mapStateToProps)(App);
