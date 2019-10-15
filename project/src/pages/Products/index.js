import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { getProducts } from '../../store/actions';
import Product from '../../components/Product';
import DetailedProduct from '../../components/DetailedProduct';
import Modal from '../../components/Modal';

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
`;

function Products() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.products);
  const [selected, setSelected] = useState({});

  const hasSelected = Object.keys(selected).length > 0;

  const detailedCallback = () => {
    return dispatch({ type: 'CLOSE_MODAL' });
  };

  const selectProduct = product => {
    dispatch({ type: 'OPEN_MODAL' });
    setSelected(product);
  };

  useEffect(() => {
    if (list.length === 0) dispatch(getProducts());
  });

  const ModalComponent = hasSelected && (
    <Modal>
      <DetailedProduct {...selected} callback={() => detailedCallback()} />
    </Modal>
  );

  return (
    <StyledWrapper>
      {ModalComponent}

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
