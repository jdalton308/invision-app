
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const IconLogo = ({fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24">
      <g fill="none" fillRule="evenodd" stroke={fill} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.556 1H5.444C2.99 1 1 3.015 1 5.5V10c0 2.486 1.99 4.5 4.444 4.5h1.668V19l4.444-4.5h5C19.01 14.5 21 12.486 21 10V5.5C21 3.015 19.01 1 16.556 1zM13 17.95c0 1.52 1.212 2.75 2.708 2.75h2.71l3.25 3.3v-3.3h1.624c1.496 0 2.708-1.23 2.708-2.75v-2.2c0-1.52-1.212-2.75-2.708-2.75"/>
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  fill: PropTypes.string,
};

IconLogo.defaultProps = {
  fill: '#00cc99',
}


export default IconLogo;