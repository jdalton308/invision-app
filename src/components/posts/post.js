
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { likePost } from '../../redux/actions';
import IconReply from '../icons/icon-reply';
import IconHeart from '../icons/icon-heart';


const Post = ({name, id, liked, profileImg, timestamp, copy, postImg, postVideo, dispatchLike}) => {
  return (
    <article className="post">
      <div className="post-base">
        <img className="post-profile-img" src={profileImg} alt="Sam Profile pic"/>
        <div className="post-info">
          
          <div className="name-action-row">
            <h3 className="name">{name}</h3>

            <div className="actions">
              <button className="icon-button">
                <IconReply />
              </button>
              <button
                className="icon-button"
                onClick={() => dispatchLike(id)}
              >
                <IconHeart />
              </button>
              <div className="timestamp">{timestamp}</div>
            </div>
          </div>

          <div className="post-copy" dangerouslySetInnerHTML={{__html: copy}}>
          </div>

          <div className={`post-liked ${(liked) ? 'show' : ''}`}>
            <IconHeart fill="#00cc99" />
            <span>Liked</span>
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
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool,
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
  liked: false,
  postImg: false,
  postVideo: false,
}


const mapDispatchToProps = (dispatch) => ({
  dispatchLike: id => {
    dispatch(likePost(id));
  }
})

const connectedPost = connect(
  null,
  mapDispatchToProps,
)(Post);



export default connectedPost;