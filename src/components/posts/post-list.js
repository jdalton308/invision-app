
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Post from './post';
import IconReply from '../icons/icon-reply';
import IconHeart from '../icons/icon-heart';


const PostList = ({allPosts, myPosts, isProfile}) => {

  const listData = (isProfile) ? myPosts : allPosts;

  console.log('New List data: ', listData);

  return (
    <main>
      <div className="post-list">

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

      </div>
    </main>
  );
};


const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts,
    myPosts: state.myPosts,
  }
}

const ConnectedPostList = connect(mapStateToProps)(PostList)



export default ConnectedPostList;