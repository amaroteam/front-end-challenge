import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import colors from '../../theme/colors';
import Icon from '../Icon';

export const StyledBackground = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 45, 48, 0.88); /* outerspace rgba */
`;

export const StyledWrapper = styled.div`
  background: ${colors.alabaster};
  position: relative;
  width: 100%;
  height: calc(100% - 30px);
  top: 50px;
  left: 0;

  ${breakpoint('tablet')`
    position: fixed;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const StyledButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  height: 30px;
  width: 30px;
  text-align: center;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  color: ${colors.light};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledIcon = styled(Icon)`
  color: ${colors.alabaster};
`;

export const StyledScroll = styled.div`
  overflow-y: auto !important;
  height: 100%;

  ${breakpoint('tablet')`
    max-height: 600px;
  `};
`;
