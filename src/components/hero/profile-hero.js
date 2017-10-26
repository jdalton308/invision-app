
import React, {Component} from 'react';


const ProfileHero = (props) => {
  return (
    <div className="content profile-hero">

      <div className="profile-info">
        <img src="/assets/img-profile-thumb-large.jpg" alt="Jessica Tuan" className="profile-img"/>
        <h2>Jessica Tuan</h2>
        <p>Designer and developer living in San Diego, CA</p>
        <p><a href="">jessicatuan.com</a></p>
      </div>

      <nav>
        <div className="nav-item active">
          JESSICA'S FEED
        </div>
        <div className="nav-item">
          2,542 FOLLOWERS
        </div>
        <div className="nav-item">
          517 FOLLOWING
        </div>
      </nav>

    </div>
  );
};


export default ProfileHero;