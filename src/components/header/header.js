
import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import IconLogo from '../icons/icon-logo.js';
import IconNewMessage from '../icons/icon-logo.js';


export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showProfileDropdown: false,
    };
  }

  render() {

    const {
      showProfileDropdown
    } = this.state;

    return (
      <header>
        <Link to="/" className="header-logo">
          <IconLogo />
          <img className="logo-copy" src="/assets/img-logo-simplysocial-copy.png" alt="simplysocial"/>
        </Link>


        <div className="header-actions">

          <button className="icon-button" type="button">
            <IconNewMessage />
          </button>

          <input type="text" className="search-input" />

          <div
            className={`profile-actions ${(showProfileDropdown) ? 'show' : ''}`}
            onClick={ () => this.setState({showProfileDropdown: !showProfileDropdown}) }
          >
            <img src="assets/img-profile-thumb.jpg" alt="Profile image" />

            <div className="profile-dropdown">
              <Link to="/profile">Profile</Link>
              <Link to="/profile/followers">Followers</Link>
              <Link to="/profile/following">Following</Link>
            </div>
          </div>

        </div>
      </header>
    );
  }
};