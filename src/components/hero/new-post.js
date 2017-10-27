
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerNewPost } from '../../redux/actions';
import IconCamera from '../icons/icon-camera';
import IconVidCamera from '../icons/icon-vid-camera';


class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasPhoto: false,
      hasVideo: false,
      newPost: '',
    };
  }

  handleInput(e) {
    this.setState({ newPost: e.target.value });
  }

  resetState() {
    this.setState({
      hasPhoto: false,
      hasVideo: false,
      newPost: '',
    });
  }

  buildNewPost() {

    const {
      hasPhoto,
      hasVideo,
      newPost
    } = this.state;

    const post = {
      id: 0, // added by reducer
      user: {
        img: '/assets/img-profile-thumb.jpg',
        name: 'Jessica Tuan',
      },
      content: {
        img: hasPhoto,
        video: hasVideo,
        timestamp: '10s',   // TODO: real timestamps
        copy: newPost,
      }
    };

    return post;
  }

  checkToSubmit(e) {
    if (e.key === 'Enter') {
      // submit new post
      // - build new post obj
      const newPost = this.buildNewPost();

      // - dispatch redux event
      this.props.dispatchNewPost(newPost);

      // - if successful, reset local state (we'll assume it works here)
      this.resetState();
    }
  }

  render() {

    const {
      hasPhoto,
      hasVideo,
      newPost,
    } = this.state;

    return (
      <div className="new-post">
        <div className="pseudo-placeholder-input">
          <input
            type="text"
            value={newPost}
            onChange={::this.handleInput}
            onKeyDown={::this.checkToSubmit}
          />
          <span className={`placeholder-text ${(newPost != '') ? 'hide' : ''}`}>What's on your mind?</span>
        </div>

        <div className="media-actions">
          <button
            className="icon-button"
            onClick={() => this.setState({hasPhoto: !hasPhoto})}
          >
            <IconCamera />
            Add Photo
          </button>
          <button
            className="icon-button"
            onClick={() => this.setState({hasVideo: !hasVideo})}
          >
            <IconVidCamera />
            Add Video
          </button>
        </div>
      </div>
    );
  }
};


const mapDispatchToProps = (dispatch) => ({
  dispatchNewPost: newPost => {
    dispatch(triggerNewPost(newPost));
  }
});

const ConnectedNewPost = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(NewPost);



export default ConnectedNewPost;