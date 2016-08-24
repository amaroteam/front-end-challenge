import expect, { createSpy } from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import ProductBox from 'components/ProductBox';

const onClickProduct = createSpy();

const product = {
  name: 'CALÇA COMFORT TASSEL',
  style: '20001786',
  code_color: '20001786_594',
  color_slug: 'paisley-gipsy-azul',
  color: 'PAISLEY GIPSY AZUL',
  on_sale: true,
  regular_price: 'R$ 139,90',
  actual_price: 'R$ 84,90',
  discount_percentage: '39%',
  installments: '2x R$ 42,45',
  image: 'https://d2odcms9up7saa.cloudfront.net/appdata/images/products/20001786_594_catalog_1.jpg?1449159646',
  sizes: [
    {
      available: true,
      size: '36',
      sku: '4029_259_0_36'
    },
    {
      available: true,
      size: '38',
      sku: '4029_259_0_38'
    },
    {
      available: true,
      size: '40',
      sku: '4029_259_0_40'
    },
    {
      available: true,
      size: '42',
      sku: '4029_259_0_42'
    },
    {
      available: false,
      size: '44',
      sku: '4029_259_0_44'
    }
  ]
};

function setup() {
  const props = {
    dispatch: () => {},
    onClickProduct,
    product,
  };

  return mount(<ProductBox {...props} />);
}

describe('ProductBox', () => {
  const wrapper = setup();

  afterEach(() => {
    onClickProduct.reset();
  });

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__box').length).toBe(1);
    expect(wrapper.find('.app__box__image').length).toBe(1);
    expect(wrapper.find('.app__box__body').length).toBe(1);
  });

  it('should render the image and handle clicks', () => {
    expect(wrapper.find('.app__box__image img').props().src).toBe('https://d2odcms9up7saa.cloudfront.net/appdata/images/products/20001786_594_catalog_1.jpg?1449159646');
    wrapper.find('.app__box__image').simulate('click');
    expect(onClickProduct).toHaveBeenCalled();
  });

  it('should render the body and handle clicks', () => {
    const body = wrapper.find('.app__box__body');

    expect(body.find('a').text()).toBe('CALÇA COMFORT TASSEL');
    body.find('a').simulate('click');
    expect(onClickProduct).toHaveBeenCalled();
  });

  it('should render the price', () => {
    const price = wrapper.find('.app__box__price');

    expect(price.childAt(0).text()).toBe('R$ 84,90');
    expect(price.childAt(1).text()).toBe('2x R$ 42,45');
  });

  it('should render the sale', () => {
    const price = wrapper.find('.app__box__sale');

    expect(price.childAt(0).text()).toBe('R$ 139,90');
    expect(price.childAt(1).text()).toBe('(39% off)');
  });
});
