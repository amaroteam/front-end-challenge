import React from 'react';
import expect, { spyOn } from 'expect';
import { mount } from 'enzyme';

import CartItem from 'components/CartItem';

const onClickUpdate = spyOn(CartItem.prototype, 'onClickUpdate');
const onClickRemove = spyOn(CartItem.prototype, 'onClickRemove');

function setup() {
  const props = {
    data: {
      color: 'CARAMELO',
      discount_percentage: '',
      image: 'http:/d2odcms9up7saa.cloudfront.net/appdata/images/products/20002575_027_catalog_1.jpg?1459537946',
      name: 'TOP CROPPED SUEDE',
      on_sale: false,
      price: 129.9,
      quantity: 1,
      size: 'M',
      sku: '5733_1000054_0_M',
      style: '20002575'
    },
    dispatch: () => {}
  };

  return mount(<CartItem {...props} />);
}

describe('CartItem', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__item').length).toBe(1);
    expect(wrapper.find('.app__item__image').length).toBe(1);
    expect(wrapper.find('.app__item__body').length).toBe(1);
  });

  it('should render the image', () => {
    expect(wrapper.find('.app__item__image img').prop('src')).toBe('http:/d2odcms9up7saa.cloudfront.net/appdata/images/products/20002575_027_catalog_1.jpg?1459537946');
  });

  it('should render the header and handle clicks', () => {
    const header = wrapper.find('.app__item__header');
    expect(header.find('h3').text()).toBe('TOP CROPPED SUEDE');
    expect(header.find('a').props().className).toBe('app__item__remove');
    expect(header.find('i').props().className).toBe('i-trash-o');

    header.find('a').simulate('click');
    expect(onClickRemove).toHaveBeenCalled();
  });

  it('should render the info', () => {
    const info = wrapper.find('.app__item__info');
    expect(info.find('span').text()).toBe('Cor: CARAMELO');
  });

  it('should render the footer', () => {
    const footer = wrapper.find('.app__item__footer');
    expect(footer.children().length).toBe(3);
    expect(footer.childAt(1).text()).toBe('Tamanho: M');
    expect(footer.childAt(2).text()).toBe('R$ 129,90');
  });

  it('should render the quantity and handle clicks', () => {
    const quantity = wrapper.find('.app__item__quantity');
    expect(quantity.find('.i-chevron-down').length).toBe(1);
    expect(quantity.find('span').text()).toBe('1');
    expect(quantity.find('.i-chevron-up').length).toBe(1);

    quantity.childAt(0).simulate('click');
    expect(onClickUpdate).toHaveBeenCalled();

    onClickUpdate.reset();
    quantity.childAt(2).simulate('click');
    expect(onClickUpdate).toHaveBeenCalled();
  });
});
