import expect, { spyOn } from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import { Products } from 'containers/Products';
import data from 'products';

const products = [...data.products].map((d, i) => {
  d.id = i + 1;
  return d;
});

const onClickSale = spyOn(Products.prototype, 'onClickSale');

function setup() {
  const props = {
    cart: {
      items: []
    },
    dispatch: () => {},
    location: {},
    products: {
      items: products
    }
  };

  return shallow(<Products {...props} />);
}

describe('Products', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.find('.app__products').length).toBe(1);
    expect(wrapper.state()).toEqual({ filter: false, productId: undefined, showModal: false });
  });

  it('should render the menu and handle clicks', () => {
    const menu = wrapper.find('.app__products__menu');
    expect(menu.length).toBe(1);
    expect(menu.find('h6').text()).toBe('FILTRO:');
    expect(menu.find('a').text()).toBe('SALE');

    menu.find('a').simulate('click');
    expect(onClickSale).toHaveBeenCalled();
  });

  it('should render the grid', () => {
    expect(wrapper.find('.app__grid').length).toBe(1);
    expect(wrapper.find('ProductBox').length).toBe(22);
  });
});
