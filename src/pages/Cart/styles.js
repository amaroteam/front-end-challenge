import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  footer {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      background: #fff;
      color: #000;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;  
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#fff')}
      }
    }
    @media (min-width: 769px) 
    {
      flex-direction: row;
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const ProductTable = styled(Grid)`
  .body-item {
    text-align: center;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .product-description {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .product-subtotal {
    padding-top: 10px;
    margin-top: 10px;
    align-items: center;
    flex-direction: row;
    border-top: 1px solid #eee;
    
    p {
      font-weight: bold;
      font-size: 16px;
    }
  }

  img {
    max-width: 110px;
  }

  strong {
    color: #333;
    display: block;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
  }

  .product-quantity {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  .md {
    display: none;
  }

  @media (min-width: 769px) 
  {
    .product-subtotal {
      display: none;
    }

    .md {
      display: flex;
    }

    .product-description {
      align-items: center;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 10px;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
    color: white;
  }

  @media (min-width: 769px) 
  {
    padding-top: 0px;
  }
`;
