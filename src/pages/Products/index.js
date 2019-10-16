import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts, addProductToCart } from '../../store/actions';
import Product from '../../components/Product';
import DetailedProduct from '../../components/DetailedProduct';
import Modal from '../../components/Modal';
import Icon from '../../components/Icon';
import { StyledWrapper } from './style';

function Products() {
  const dispatch = useDispatch();

  const isSaleSelected = useSelector(state => state.productsFilters.sale);

  let list = useSelector(state => state.products);
  if (isSaleSelected) list = list.filter(item => item.onSale);

  const [selected, setSelected] = useState({});
  const [filter, setFilter] = useState(true);

  const hasSelected = Object.keys(selected).length > 0;

  const selectProduct = product => {
    dispatch({ type: 'OPEN_MODAL' });
    setSelected(product);
  };

  const updateFilter = () => {
    dispatch({ type: 'UPDATE_SALE_FILTER' });
    setFilter(!filter);
  };

  const addToCart = ({ product, selectedSize }) => {
    dispatch(addProductToCart({ product, selectedSize }));
    dispatch({ type: 'CLOSE_MODAL' });
  };

  useEffect(() => {
    if (list.length === 0) dispatch(getProducts());
  });

  return (
    <StyledWrapper>
      {hasSelected && (
        <Modal>
          <DetailedProduct
            {...selected}
            callback={selectedSize =>
              addToCart({ product: selected, selectedSize })
            }
          />
        </Modal>
      )}

      <div className='order'>
        <button type='button' onClick={() => updateFilter()}>
          only <span>sale</span>
          <Icon name={filter ? 'down' : 'delete'} size='1em' />
        </button>
      </div>

      <ul>
        {list.map((product, index) => (
          <li key={`product-${index}`} data-cypress='products-item'>
            <Product {...product} callback={() => selectProduct(product)} />
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
}

export default Products;
