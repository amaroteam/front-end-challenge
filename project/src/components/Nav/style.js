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
`;
