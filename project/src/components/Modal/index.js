import React from 'react';
import { node, bool, func } from 'prop-types';

import {
  StyledBackground,
  StyledWrapper,
  StyledButton,
  StyledIcon,
  StyledScroll,
} from './style';

const propTypes = {
  children: node.isRequired,
  shouldShow: bool.isRequired,
  callback: func.isRequired,
};

function Modal({ children, shouldShow, callback }) {
  return (
    shouldShow && (
      <StyledBackground>
        <StyledWrapper>
          <StyledButton
            type='button'
            onClick={() => callback()}
            data-cypress='close-button'
          >
            <StyledIcon name='close' size='2em' />
          </StyledButton>
          <StyledScroll>{children}</StyledScroll>
        </StyledWrapper>
      </StyledBackground>
    )
  );
}

Modal.propTypes = propTypes;

export default Modal;
