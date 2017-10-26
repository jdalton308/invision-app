
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const IconNewMessage = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="33" viewBox="0 0 39 33">
      <g fill="none" fillRule="evenodd" stroke={fill}>
        <path d="M19.62 20.118h-.81L12.333 26v-5.882h-.81C5.737 20.118 1 15.816 1 10.558 1 5.302 5.736 1 11.524 1h12.952C30.264 1 35 5.3 35 10.56c0 1.3-.29 2.542-.815 3.675" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 24.5c0 4.143-3.582 7.5-8 7.5s-8-3.357-8-7.5c0-4.142 3.582-7.5 8-7.5s8 3.358 8 7.5z"/>
        <path d="M30.036 21v7M34 24.5h-8" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

IconNewMessage.propTypes = {
  fill: PropTypes.string,
};

IconNewMessage.defaultProps = {
  fill: '#00cc99',
}


export default IconNewMessage;