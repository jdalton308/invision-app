
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconReply from '../icons/icon-reply';
import IconHeart from '../icons/icon-heart';


const Post = ({name, profileImg, timestamp, copy, postImg, postVideo}) => {
  return (
    <article className="post">
      <div className="post-base">
        <img className="post-profile-img" src={profileImg} alt="Sam Profile pic"/>
        <div className="post-info">
          <div className="name-action-row">
            <h3 className="name">{name}</h3>
            <button className="icon-button">
              <IconReply />
            </button>
            <button className="icon-button">
              <IconHeart />
            </button>
            <div className="timestamp">{timestamp}</div>
          </div>
          <div className="post-copy">
            {copy}
          </div>
        </div>
      </div>

      { postImg &&
        <div className="media-container">
          <img src={postImg} alt="post image"/>
        </div>
      }

      { postVideo && 
        <div className="media-container">
          <img src={postVideo} alt="post image"/>
        </div>
      }
    </article>
  );
};


Post.propTypes = {
  name: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  postImg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  postVideo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

Post.defaultProps = {
  postImg: false,
  postVideo: false,
}


export default Post;