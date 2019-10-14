import styled from 'styled-components';

import colors from '../../theme/colors';

export const StyledWrapper = styled.div`
  .logo {
    margin: 0 0 30px;
    text-align: left;
  }

  .menu {
    position: absolute;
    top: 0;
    right: 0;

    svg {
      color: ${colors.dark};
    }

    a {
      width: 50px;
      height: 34px;
      display: block;
      position: relative;
      top: 20px;
      left: -11px;
    }
  }
`;
