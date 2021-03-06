
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const IconCamera = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17">
      <g fill="none" fillRule="evenodd" stroke={fill}>
        <path d="M15 9.5c0 1.933-1.568 3.5-3.5 3.5C9.566 13 8 11.433 8 9.5S9.566 6 11.5 6C13.432 6 15 7.567 15 9.5z"/>
        <path d="M16.216 3h3.93C21.167 3 22 4.077 22 5.153v8.89C22 15.12 21.166 16 20.147 16H2.853C1.833 16 1 15.12 1 14.044v-8.89C1 4.076 1.834 3 2.853 3h3.93M7 3l2.858-2h4.286L17 3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

IconCamera.propTypes = {
  fill: PropTypes.string,
};

IconCamera.defaultProps = {
  fill: '#fff',
}


export default IconCamera;