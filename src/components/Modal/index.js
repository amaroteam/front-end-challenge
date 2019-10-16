import React, { useRef, useEffect } from 'react';
import { node } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyledBackground,
  StyledWrapper,
  StyledButton,
  StyledIcon,
  StyledScroll,
} from './style';

const propTypes = {
  children: node.isRequired,
};

function useOutsideAlerter(ref, callback) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

function Modal({ children }) {
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const isOpen = useSelector(({ modal }) => modal.isOpen);
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  useOutsideAlerter(wrapperRef, closeModal);

  return (
    isOpen && (
      <StyledBackground>
        <StyledWrapper ref={wrapperRef}>
          <StyledButton
            type='button'
            onClick={() => closeModal()}
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
