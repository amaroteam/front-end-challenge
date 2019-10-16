import styled from 'styled-components';

import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  .logo {
    margin: 0 0 30px;
    text-align: left;
  }

  .menu {
    position: absolute;
    top: 30px;
    right: 30px;

    svg {
      color: ${colors.dark};
    }

    a {
      width: 50px;
      height: 34px;
      display: inline-block;
    }
  }

  .cart {
    text-decoration: none;
    position: relative;

    .badge {
      position: absolute;
      background: ${colors.primary};
      padding: 4px 5px 5px;
      border-radius: 15px;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      display: block;
      top: -9px;
      right: 16px;
      text-align: center;
    }
  }
`;
