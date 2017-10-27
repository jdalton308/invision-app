
import React, {Component} from 'react';
import { connect } from 'react-redux'

import { setCardLayout } from '../../redux/actions';
import NewPost from './new-post';


const HomeHero = ({dispatchCardToggle, useCards}) => {
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
          <button
            className={`icon-button ${(!useCards) ? 'active' : ''}`}
            onClick={ () => { dispatchCardToggle(false) } }
          >
            <div className="list-icon">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </button>
          <button
            className={`icon-button ${(useCards) ? 'active' : ''}`}
            onClick={ () => { dispatchCardToggle(true) } }
          >
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


const mapDispatchToProps = (dispatch) => ({
  dispatchCardToggle: useCards => {
    dispatch(setCardLayout(useCards));
  }
});

const mapStateToProps = (state) => {
  return {
    useCards: state.useCardLayout,
  }
};

const ConnectedHomeHero = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHero);


export default ConnectedHomeHero;