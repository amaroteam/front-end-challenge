import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { getProducts } from '../../store/actions';
import Product from '../../components/Product';
import DetailedProduct from '../../components/DetailedProduct';
import Modal from '../../components/Modal';
import Icon from '../../components/Icon';
import colors from '../../theme/colors';

const StyledWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: stretch;
    margin-left: -15px;
    margin-right: -15px;

    li {
      display: flex;
      flex-flow: column;
      align-items: stretch;
      justify-content: stretch;
      width: calc(100% - 20px);
      height: auto;
      margin: 0 10px 20px;

      ${breakpoint('tablet')`
        width: calc(33% - 30px);
        margin: 0 15px 30px;
      `}

      ${breakpoint('desktop')`
        width: calc(25% - 30px);
        margin: 0 15px 30px;
      `}
    }
  }

  .order {
    margin: 0 0 20px;

    button {
      background: none;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      span {
        color: ${colors.secondary};
        font-weight: bold;
      }

      svg {
        position: relative;
        top: 3px;
        right: -3px;
      }
    }
  }
`;

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

  useEffect(() => {
    if (list.length === 0) dispatch(getProducts());
  });

  return (
    <StyledWrapper>
      {hasSelected && (
        <Modal>
          <DetailedProduct
            {...selected}
            callback={() => dispatch({ type: 'CLOSE_MODAL' })}
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
          <li key={`product-${index}`}>
            <Product {...product} callback={() => selectProduct(product)} />
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
}

export default Products;
