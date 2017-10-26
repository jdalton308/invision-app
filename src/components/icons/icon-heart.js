
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const IconNewMessage = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path fill="none" fillRule="evenodd" stroke={fill} d="M6 11s5-3.713 5-7.227C11 .26 6.563-.01 6 3.505 5.437-.01 1 .26 1 4.045 1 7.828 6 11 6 11z" strokeLinejoin="round"/>
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