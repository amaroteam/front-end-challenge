import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
  justify-content: stretch;
  height: auto;
  width: 100%;
  text-align: center;
  background: ${colors.light};

  .content {
    border: 1px solid ${colors.gray};
    position: relative;
    padding: 0 20px;
    height: auto;
    width: 100%;

    ${breakpoint('tablet')`
      height: 510px;
      width: 800px;
    `}

    &:hover {
      border-color: #ccc;
      transition: 0.2s all ease-in-out;
    }
  }

  .image {
    width: 100%;
    display: block;
    position: relative;

    ${breakpoint('tablet')`
      width: 50%;
      display: inline-block;
    `}

    img {
      width: 50%;
      object-fit: cover;
      margin: 10px auto;

      ${breakpoint('tablet')`
        width: 100%;
        object-fit: cover;
      `}
    }
  }

  .bottomContent {
    width: 100%;
    display: inline-block;
    padding: 5px 10px 15px;
    margin-top: 10px;

    ${breakpoint('tablet')`
      display: inline-block;
      vertical-align: top;
      width: 50%;
      margin-top: 50px;
    `}
  }

  .name {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .prices {
    display: inline;
    margin-right: 10px;
  }

  .regularPrice {
    ${({ sale }) =>
      sale
        ? `
          font-size: 12px;
          position: relative;
          text-decoration: line-through;
          top: -2px;
        `
        : `
          font-size: 22px;
        `}
  }

  .actualPrice {
    color: ${colors.black};
    font-weight: normal;

    ${({ sale }) =>
      sale &&
      `
        color: ${colors.primary};
        font-weight: bold;
        font-size: 22px;
        position: relative;
        top: 3px;
      `}
  }

  .installments {
    color: #bbb;
    font-size: 12px;
    position: relative;
    top: -2px;
  }

  .submit {
    button {
      padding: 10px 20px;
      width: 100%;
      margin: 20px 0px;
      text-transform: uppercase;
      background: ${colors.primary};
      color: ${colors.light};
      font-weight: bold;
      border: 2px solid ${colors.primary};

      &:hover {
        cursor: pointer;
        border: 2px solid ${colors.dark};
        transition: 0.2s all ease-in-out;
      }
    }
  }
`;

export const StyledButton = styled.button`
  margin-top: 15px;
  text-align: center;
  width: 40px;
  display: inline-block;
  margin-right: 5px;
  padding: 5px 0px 10px;
  background: ${colors.light};
  font-size: 14px;
  font-weight: bold;

  border: ${({ selected }) =>
    selected ? `2px solid ${colors.dark}` : '2px solid #ccc'};

  &:hover {
    border-color: ${colors.dark};
    color: ${colors.dark};
    background: ${colors.light};
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }

  span {
    font-size: 10px;
  }
`;
