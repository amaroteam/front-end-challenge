import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../store';

function Products() {
  const list = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (list.length === 0) dispatch(actions.getProducts());
  });

  const addToCart = product =>
    dispatch({
      type: 'ADD_PRODUCT_CART',
      product,
    });

  return list.map((product, index) => (
    <div key={index}>
      <img height='40' width='40' src={product.image} alt='' />
      <p>{product.name}</p>
      <button type='button' onClick={() => dispatch(addToCart(product))}>
        add
      </button>
    </div>
  ));
}

export default Products;
