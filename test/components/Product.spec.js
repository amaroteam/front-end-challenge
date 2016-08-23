import expect, { spyOn } from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import Product from 'components/Product';

const onClickSize = spyOn(Product.prototype, 'onClickSize');
const onClickBuy = spyOn(Product.prototype, 'onClickBuy');

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
    product
  };

  return mount(<Product {...props} />);
}

describe('Product', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__product').length).toBe(1);
    expect(wrapper.find('.app__product__image').length).toBe(1);
    expect(wrapper.find('.app__product__body').length).toBe(1);
  });

  it('should render the header', () => {
    expect(wrapper.find('.app__product__header h3').text()).toBe('CALÇA COMFORT TASSEL');
    expect(wrapper.find('.app__product__regular_price').text()).toBe('R$ 139,90');
    expect(wrapper.find('.app__product__actual_price').text()).toBe('R$ 84,90');
    expect(wrapper.find('.app__product__discount').text()).toBe('(39% off)');
    expect(wrapper.find('.app__product__installments').text()).toBe('2x R$ 42,45');
  });

  it('should render the color', () => {
    const color = wrapper.find('.app__product__colors').childAt(0);

    expect(color.childAt(0).text()).toBe('Cor:');
    expect(color.childAt(1).text()).toBe('PAISLEY GIPSY AZUL');

    expect(wrapper.find('.app__product__colors__chooser').length).toBe(1);
  });

  it('should render the sizes and handle clicks', () => {
    const sizes = wrapper.find('.app__product__sizes__chooser');

    expect(wrapper.find('.app__product__sizes').childAt(0).text()).toBe('Tamanho:');

    expect(sizes.children().length).toBe(5);
    sizes.children().forEach((d, i) => {
      expect(d.text()).toBe(product.sizes[i].size);

      if (i === 4) {
        expect(d.hasClass('disabled')).toBe(true);
      }
    });

    sizes.childAt(0).simulate('click');
    expect(onClickSize).toHaveBeenCalled();
  });

  it('should render the actions and handle clicks', () => {
    const actions = wrapper.find('.app__product__actions');
    expect(actions.find('.btn-primary').text()).toBe('Comprar');

    actions.find('.btn-primary').simulate('click');
    expect(onClickBuy).toHaveBeenCalled();
  });
});
