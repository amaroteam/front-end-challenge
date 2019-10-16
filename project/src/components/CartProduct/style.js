import styled from 'styled-components';

import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  margin: 0 10px 20px;
  padding: 10px 10px 30px;
  position: relative;

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;

    &:hover {
      cursor: pointer;
    }

    svg {
      color: ${colors.dark};
    }
  }

  .columnLeft {
    width: 50%;
    object-fit: contain;
    display: inline-block;

    img {
      width: 100%;
      border: 1px solid #eee;
    }
  }

  .columnRight {
    width: calc(50% - 10px);
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    text-align: center;
    padding-top: 30px;

    .name {
      margin-bottom: 10px;
    }

    .regularPrice {
      margin-bottom: 5px;
    }

    .actualPrice {
      font-size: 12px;
      text-decoration: line-through;
      margin-bottom: 5px;
    }

    .installments {
      font-size: 12px;
      color: #aaa;
    }

    .sizes {
      margin-top: 20px;

      & > span {
        font-size: 12px;
        display: block;
      }
    }

    .size {
      border: 1px solid #ddd;
      text-align: center;
      width: 25px;
      display: inline-block;
      margin: 4px 2px 0;
      padding: 0px 0px 8px;

      span {
        font-size: 10px;
      }
    }

    .quantity {
      margin-top: 20px;
      font-size: 12px;

      input {
        background: ${colors.light};
        margin-top: 5px;
        width: 50px;
        height: 35px;
        border: 1px solid #ccc;
        padding: 10px 0 10px 10px;
        text-align: center;
      }
    }
  }
`;
