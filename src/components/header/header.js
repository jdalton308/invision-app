
import React, {Component} from 'react';


const Header = (props) => {
  return (
    <header>
      <div className="header-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24">
          <g fill="none" fillRule="evenodd" stroke="#00cc99" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16.556 1H5.444C2.99 1 1 3.015 1 5.5V10c0 2.486 1.99 4.5 4.444 4.5h1.668V19l4.444-4.5h5C19.01 14.5 21 12.486 21 10V5.5C21 3.015 19.01 1 16.556 1zM13 17.95c0 1.52 1.212 2.75 2.708 2.75h2.71l3.25 3.3v-3.3h1.624c1.496 0 2.708-1.23 2.708-2.75v-2.2c0-1.52-1.212-2.75-2.708-2.75"/>
          </g>
        </svg>
        <img className="logo-copy" src="/assets/img-logo-simplysocial-copy.png" alt="simplysocial"/>
      </div>

      <div className="header-actions">

        <button className="icon-button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="33" viewBox="0 0 39 33">
            <g fill="none" fillRule="evenodd" stroke="#00cc99">
              <path d="M19.62 20.118h-.81L12.333 26v-5.882h-.81C5.737 20.118 1 15.816 1 10.558 1 5.302 5.736 1 11.524 1h12.952C30.264 1 35 5.3 35 10.56c0 1.3-.29 2.542-.815 3.675" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M38 24.5c0 4.143-3.582 7.5-8 7.5s-8-3.357-8-7.5c0-4.142 3.582-7.5 8-7.5s8 3.358 8 7.5z"/>
              <path d="M30.036 21v7M34 24.5h-8" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        </button>

        <input type="text" className="search-input" />

        <div className="profile-dropdown">
          <img src="assets/img-profile-thumb.jpg" alt="Profile image" />
        </div>

      </div>
    </header>
  );
};


export default Header;