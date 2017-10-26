
import React, {Component} from 'react';

import IconCamera from '../icons/icon-camera';
import IconVidCamera from '../icons/icon-vid-camera';


const HomeHero = (props) => {
  return (
    <div className="content home-hero">

      <div className="new-post">
        <div className="pseudo-placeholder-input">
          <input type="text"/>
          <span className="placeholder-text">What's on your mind?</span>
        </div>

        <div className="media-actions">
          <button className="icon-button">
            <IconCamera />
            Add Photo
          </button>
          <button className="icon-button">
            <IconVidCamera />
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
  );
};


export default HomeHero;