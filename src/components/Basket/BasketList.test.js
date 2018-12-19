import React from 'react';
import { shallow } from 'enzyme';
import BasketList from './BasketList';

test('expect to render BasketList component', () => {
  const mockBasket = {
    basket: [],
    onClick: () => {},
  };

  expect(
    shallow(
      <BasketList basket={mockBasket.basket} onClick={mockBasket.onClick} />
    )
  ).toHaveLength(1);
});
