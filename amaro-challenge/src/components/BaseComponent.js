import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './HeaderComponent';

class Base extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isTopBarFixed: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 72) {
      this.setState({
        isTopBarFixed: true
      });
    } else if (window.scrollY < 72) {
      this.setState({
        isTopBarFixed: false
      });
    }
  }

  render() {
    return (
      <div>
        <Header cartProductsQuantity={this.props.cartProductsQuantity} isTopBarFixed={this.state.isTopBarFixed}/>
        {this.props.children}
        {/* TODO: footer */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartProductsQuantity: state.shoppingCart.products.length
})

export default connect(mapStateToProps)(Base);
