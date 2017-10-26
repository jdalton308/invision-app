
import React, {Component} from 'react';

import NewPost from './new-post';


const HomeHero = (props) => {
  return (
    <div className="content home-hero">

      <NewPost />

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