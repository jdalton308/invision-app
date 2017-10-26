
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const IconNewMessage = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path fill="none" fillRule="evenodd" stroke={fill} d="M5.048 2.667S11 1.667 11 10C9.095 5 5.048 6.667 5.048 6.667v2.666L1 4.667 5.048 0v2.667z" strokeLinejoin="round"/>
    </svg>
  );
};

IconNewMessage.propTypes = {
  fill: PropTypes.string,
};

IconNewMessage.defaultProps = {
  fill: '#bec3cc',
}


export default IconNewMessage;