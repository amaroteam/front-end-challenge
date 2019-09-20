import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
  background: linear-gradient(to top, transparent 0%, rgba(22, 22, 22, 1) 100%);
  width: 100%;
  max-width: 1440px;
  height: 100px;
  margin: 0;
  padding: 0 10px;

  svg {
    fill: white;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover{
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
    color: #fff;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
    }
  }
`;
