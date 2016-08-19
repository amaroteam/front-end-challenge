import React from 'react';
import { autobind } from 'core-decorators';
import { shouldComponentUpdate } from 'utils/helpers';

import { goTo } from 'actions';

import Logo from 'components/Logo';

export default class Header extends React.Component {
  static propTypes = {
    cart: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired,
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickLogo(e) {
    e.preventDefault();
    const el = e.currentTarget;

    this.props.dispatch(goTo(el.getAttribute('href')));
  }

  @autobind
  onClickCart(e) {
    e.preventDefault();
    const el = e.currentTarget;

    this.props.dispatch(goTo(el.getAttribute('href')));
  }

  render() {
    const props = this.props;
    const cart = props.cart;

    return (
      <header className="app__header">
        <div className="app__container">
          <a href="/" className="app__header__logo" onClick={this.onClickLogo}>
            <Logo />
          </a>

          <a href="/cart" className="app__header__cart" onClick={this.onClickCart}>
            <i className="i-shopping-cart" />
          </a>
        </div>
      </header>
    );
  }
}
