import styled from 'styled-components';

import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
  justify-content: stretch;
  height: auto;

  &:hover {
    cursor: pointer;
  }

  .content {
    border: 1px solid ${colors.gray};
    position: relative;
  }

  .sale {
    position: absolute;
    top: 0;
    left: 0;
    background: ${colors.dark};
    color: ${colors.light};
    padding: 10px;
    text-align: center;

    .title {
      margin-bottom: 7px;
      text-decoration: underline;
    }
  }

  .image {
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .bottomContent {
    padding: 5px 10px 15px;
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
    ${({ onSale }) =>
      onSale
        ? `
          font-size: 12px;
          position: relative;
          text-decoration: line-through;
          top: -2px;
        `
        : `
          font-size: 16px;
        `}
  }

  .actualPrice {
    color: ${colors.black};
    font-weight: normal;

    ${({ onSale }) =>
      onSale &&
      `
        color: ${colors.primary};
        font-weight: bold;
      `}
  }

  .installments {
    color: #bbb;
    font-size: 12px;
    position: relative;
    top: -2px;
  }

  .size {
    margin-top: 15px;
    border: 1px solid #ddd;
    text-align: center;
    width: 25px;
    display: inline-block;
    margin-right: 5px;
    padding: 0px 0px 8px;

    span {
      font-size: 10px;
    }
  }
`;
