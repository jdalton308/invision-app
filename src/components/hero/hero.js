
import React, {Component} from 'react';


const Hero = (props) => {
  return (
    <section className="section-hero">
      <div className="content">

        <div className="new-post">
          <div className="pseudo-placeholder-input">
            <input type="text"/>
            <span className="placeholder-text">What's on your mind?</span>
          </div>

          <div className="media-actions">
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M15 9.5c0 1.933-1.568 3.5-3.5 3.5C9.566 13 8 11.433 8 9.5S9.566 6 11.5 6C13.432 6 15 7.567 15 9.5z"/>
                  <path d="M16.216 3h3.93C21.167 3 22 4.077 22 5.153v8.89C22 15.12 21.166 16 20.147 16H2.853C1.833 16 1 15.12 1 14.044v-8.89C1 4.076 1.834 3 2.853 3h3.93M7 3l2.858-2h4.286L17 3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              Add Photo
            </button>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M15 13.6c0 .77-.394 1.4-.875 1.4H1.875C1.395 15 1 14.37 1 13.6V2.4c0-.77.394-1.4.875-1.4h12.25c.48 0 .875.63.875 1.4v11.2z"/>
                  <path d="M4 5h9" strokeLinecap="round"/>
                  <path d="M15 10.035l4.23 2.868c.424.288.77-.087.77-.833V3.93c0-.745-.347-1.12-.77-.833L15 5.965" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              Add Video
            </button>
          </div>
        </div>

        <nav>
          <div className="nav-item active">
            ALL POSTS
          </div>
          <div className="nav-item">
            PHOTOS
          </div>
          <div className="nav-item">
            VIDEOS
          </div>
          <div className="layout-switches">
            <button className="icon-button">
              <div className="list-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>
            <button className="icon-button active">
              <div className="grid-icon">
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
              </div>
            </button>
          </div>
        </nav>

      </div>
    </section>
  );
};


export default Hero;