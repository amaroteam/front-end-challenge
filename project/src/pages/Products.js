import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { isTemplateElement } from '@babel/types';
import { actions } from '../store';
import { colors } from '../theme';

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
      width: calc(50% - 30px);
      height: auto;
      margin: 0 15px 65px;

      .content {
        border: 1px solid ${colors.dark};
        border-bottom: none;
      }

      .image {
        position: relative;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      button {
        padding: 10px 0;
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        color: ${colors.light};
        background: ${colors.primary};

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

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

  console.log(list);

  return (
    <StyledWrapper>
      <ul>
        {list.map((product, index) => (
          <li key={index}>
            <div className='content'>
              <div className='image'>
                <img src={product.image} alt='' />
              </div>
              <p>{product.name}</p>
              <p>{product.regular_price}</p>
              <p>{product.on_sale ? 'promoção' : ''}</p>
              <p>{product.on_sale && product.discount_percentage}</p>
              <p>{product.on_sale && product.actual_price}</p>
              <ul>
                {product.sizes.map(item => (
                  <p>{item.size}</p>
                ))}
              </ul>
            </div>
            <button type='button' onClick={() => dispatch(addToCart(product))}>
              COMPRAR
            </button>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
}

export default Products;
