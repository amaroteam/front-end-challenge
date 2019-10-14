import React from 'react';
import { string } from 'prop-types';
import {
  IoIosInformationCircleOutline,
  IoIosChatbubbles,
  IoIosMail,
  IoMdClose,
} from 'react-icons/io';
import {
  FaWhatsapp,
  FaUserCircle,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaRegHeart,
  FaChevronDown,
  FaChevronLeft,
} from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';

const defaultProps = {
  color: '',
  size: '',
  className: '',
};

const propTypes = {
  name: string.isRequired,
  className: string,
  color: string,
  size: string,
};

export const iconsLibrary = {
  info: IoIosInformationCircleOutline,
  whatsapp: FaWhatsapp,
  user: FaUserCircle,
  plus: FiPlusCircle,
  emptyStar: FaRegStar,
  fullStar: FaStar,
  halfStar: FaStarHalfAlt,
  chat: IoIosChatbubbles,
  mail: IoIosMail,
  heart: FaRegHeart,
  arrowDown: FaChevronDown,
  arrowLeft: FaChevronLeft,
  close: IoMdClose,
};

function Icon({ name, color, size, className }) {
  const IconComponent = iconsLibrary[name];

  return (
    <IconComponent
      color={color}
      size={size}
      name={name}
      className={className}
    />
  );
}

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;

export default Icon;
