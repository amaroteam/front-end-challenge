import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  .list,
  .checkout {
    display: inline-block;
    vertical-align: top;
  }

  .list {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;

    ${breakpoint('tablet')`
      width: 70%;
      display: inline-flex;
    `}

    & > div {
      flex-grow: 1;
      width: 100%;
      margin: 0 0 20px;

      ${breakpoint('tablet')`
        width: calc(50% - 20px);
        margin: 0 10px 20px;
      `}

      ${breakpoint('desktop')`
        width: calc(33% - 20px);
      `}
    }

    & > div:last-child,
    & > div:nth-last-child(2) {
      flex-grow: 0;
    }
  }

  .checkout {
    width: 100%;
    display: block;
    border: 1px solid #ccc;
    padding: 20px;

    ${breakpoint('tablet')`
      width: 30%;
      display: inline-block;
    `}

    .columnLeft,
    .columnRight {
      width: 50%;
      display: inline-block;
      text-align: center;

      p {
        margin-bottom: 10px;
      }

      .total {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .submit {
      button {
        padding: 10px;
        width: 100%;
        display: block;
        background: ${colors.primary};
        color: ${colors.light};
        font-size: 22px;
        font-weight: bold;
        margin: 30px 0 0;
        letter-spacing: 5px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledSize = styled.div``;
