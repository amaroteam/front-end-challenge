import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  ul {
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    & > li:last-child,
    & > li:nth-last-child(2),
    & > li:nth-last-child(3) {
      flex-grow: 0;
    }

    li {
      width: calc(100% - 20px);
      margin: 0 10px 20px;
      flex-grow: 1;
      display: flex;
      
      ${breakpoint('mobile')`
        width: calc(50% - 30px);
        margin: 0 15px 30px;
      `}
      
      ${breakpoint('tablet')`
        width: calc(33% - 30px);
        margin: 0 15px 30px;
      `}
      
      ${breakpoint('desktop')`
        width: calc(25% - 30px);
        margin: 0 15px 30px;
      `};
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
