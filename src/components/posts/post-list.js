
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import Post from './post';
import IconReply from '../icons/icon-reply';
import IconHeart from '../icons/icon-heart';


const PostList = ({allPosts, myPosts, isProfile}) => {

  const listData = (isProfile) ? myPosts : allPosts;

  console.log('New List data: ', listData);

  return (
    <main>
      <div className="post-list">

        {
          listData.map((post) => {
            const {user, content} = post;

            return (
              <Post
                key={post.id}
                name={user.name}
                profileImg={user.img}
                timestamp={content.timestamp}
                copy={content.copy}
                postImg={content.img}
                postVideo={content.video}
              />
            );
          })
        }

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