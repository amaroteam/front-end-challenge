import React from 'react';
import { shallow } from 'enzyme';
import BasketItem from './BasketItem';

test('expect to render BasketItem component', () => {
  const mockBasket = {
    index: 0,
    name: 'VESTIDO TRANSPASSE BOW',
    image: 'https://via.placeholder.com/470x594',
    color: 'TAPEÇARIA',
    qtd: 1,
    size: 'P',
    price: 'R$ 199,90',
    onClick: () => {},
  };

  expect(
    shallow(
      <BasketItem
        index={mockBasket.index}
        name={mockBasket.name}
        image={mockBasket.image}
        color={mockBasket.color}
        qtd={mockBasket.qtd}
        size={mockBasket.size}
        price={mockBasket.price}
        onClick={mockBasket.onClick}
      />
    )
  ).toHaveLength(1);
});
