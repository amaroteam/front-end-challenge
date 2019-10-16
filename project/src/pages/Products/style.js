import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
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

  .order {
    margin: 0 0 20px;

    button {
      background: none;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      span {
        color: ${colors.secondary};
        font-weight: bold;
      }

      svg {
        position: relative;
        top: 3px;
        right: -3px;
      }
    }
  }
`;
