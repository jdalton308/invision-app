
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Post from './post';
import IconReply from '../icons/icon-reply';
import IconHeart from '../icons/icon-heart';


const PostList = ({useCards, allPosts, myPosts, isProfile}) => {

  const listData = (isProfile) ? myPosts : allPosts;

  return (
    <main>
      <div className={`post-list ${(useCards) ? 'cards' : 'list'}`}>

        <CSSTransitionGroup
          transitionName="post-fade"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={1100}
          transitionLeaveTimeout={500}
        >
          {
            listData.map((post) => {
              const {user, content} = post;

              return (
                <Post
                  key={post.id}
                  id={post.id}
                  name={user.name}
                  liked={content.liked}
                  profileImg={user.img}
                  timestamp={content.timestamp}
                  copy={content.copy}
                  postImg={content.img}
                  postVideo={content.video}
                />
              );
            })
          }
        </CSSTransitionGroup>

        <button className="load-more icon-button">
          LOAD MORE
        </button>

      </div>
    </main>
  );
};


const mapStateToProps = (state) => {
  return {
    useCards: state.useCardLayout,
    allPosts: state.allPosts,
    myPosts: state.myPosts,
  }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)



export default ConnectedPostList;