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
    width: 70%;
    display: inline-flex;
    flex-wrap: wrap;

    & > div {
      flex-grow: 1;
      width: calc(33% - 20px);
    }

    & > div:last-child,
    & > div:nth-last-child(2) {
      flex-grow: 0;
    }
  }

  .checkout {
    width: 30%;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 20px;

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

      /* ${breakpoint('tablet')`
        width: calc(33% - 30px);
        margin: 0 15px 30px;
      `}

      ${breakpoint('desktop')`
        width: calc(25% - 30px);
        margin: 0 15px 30px;
      `} */
`;

export const StyledSize = styled.div``;
