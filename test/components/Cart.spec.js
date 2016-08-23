import React from 'react';
import expect, { spyOn } from 'expect';
import { shallow } from 'enzyme';

import Cart from 'components/Cart';

const onClickClose = spyOn(Cart.prototype, 'onClickClose');
const onClickPay = spyOn(Cart.prototype, 'onClickPay');

function setup() {
  const props = {
    cart: {
      frete: 14.99,
      subtotal: 129.9,
      total: 144.89,
      items: [
        {
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
        }
      ]
    },
    dispatch: () => {}
  };

  return shallow(<Cart {...props} />);
}

describe('Cart', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance()).toBeA(React.Component);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__cart').length).toBe(1);
    expect(wrapper.find('.app__cart__overlay').length).toBe(1);
    expect(wrapper.find('.app__cart__wrapper').length).toBe(1);
  });

  it('should render the header and handle clicks', () => {
    const header = wrapper.find('.app__cart__header');
    expect(header.length).toBe(1);
    expect(header.find('h5').text()).toBe('Sacola (1)');

    header.find('a').simulate('click');
    expect(onClickClose).toHaveBeenCalled();
  });

  it('should render the body', () => {
    const body = wrapper.find('.app__cart__body');
    expect(body.length).toBe(1);
    expect(body.find('.app__cart__items').length).toBe(1);
    expect(body.find('CartItem').length).toBe(1);
  });

  it('should render the subtotal', () => {
    const subtotal = wrapper.find('.app__cart__subtotal');
    expect(subtotal.length).toBe(1);
    expect(subtotal.children().length).toBe(2);
    expect(subtotal.childAt(0).text()).toBe('Subtotal');
    expect(subtotal.childAt(1).text()).toBe('R$ 129,90');
  });

  it('should render the shipping', () => {
    const shipping = wrapper.find('.app__cart__shipping');
    expect(shipping.length).toBe(1);
    expect(shipping.children().length).toBe(2);
    expect(shipping.childAt(0).text()).toBe('Frete');
    expect(shipping.childAt(1).text()).toBe('R$ 14,99');
  });

  it('should render the total', () => {
    const total = wrapper.find('.app__cart__total');
    expect(total.length).toBe(1);
    expect(total.children().length).toBe(2);
    expect(total.childAt(0).text()).toBe('Total');
    expect(total.childAt(1).text()).toBe('R$ 144,89');
  });

  it('should render the actions and handle clicks', () => {
    const actions = wrapper.find('.app__cart__actions');
    expect(actions.find('.btn-secondary-outline').text()).toBe('Comprar mais');
    expect(actions.find('.btn-primary').text()).toBe('Pagamento');

    onClickClose.reset();
    actions.find('.btn-secondary-outline').simulate('click');
    expect(onClickClose).toHaveBeenCalled();

    actions.find('.btn-primary').simulate('click');
    expect(onClickPay).toHaveBeenCalled();
  });
});
