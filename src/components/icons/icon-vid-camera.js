
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const IconVidCamera = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16">
      <g fill="none" fillRule="evenodd" stroke={fill}>
        <path d="M15 13.6c0 .77-.394 1.4-.875 1.4H1.875C1.395 15 1 14.37 1 13.6V2.4c0-.77.394-1.4.875-1.4h12.25c.48 0 .875.63.875 1.4v11.2z"/>
        <path d="M4 5h9" strokeLinecap="round"/>
        <path d="M15 10.035l4.23 2.868c.424.288.77-.087.77-.833V3.93c0-.745-.347-1.12-.77-.833L15 5.965" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

IconVidCamera.propTypes = {
  fill: PropTypes.string,
};

IconVidCamera.defaultProps = {
  fill: '#fff',
}


export default IconVidCamera;