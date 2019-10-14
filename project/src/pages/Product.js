import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import colors from '../theme/colors';

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
            <button type='button' onClick={() => {}}>
              COMPRAR
            </button>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
}

export default Products;
