
import React, {Component} from 'react';

import IconReply from '../icons/icon-reply';
import IconHeart from '../icons/icon-heart';


const PostList = (props) => {
  return (
    <main>
      <div className="post-list">

        <article className="post">
          <div className="post-base">
            <img className="post-profile-img" src="/assets/img-thumb-sam.jpg" alt="Sam Profile pic"/>
            <div className="post-info">
              <div className="name-action-row">
                <h3 className="name">Sam Soffes</h3>
                <button className="icon-button">
                  <IconReply />
                </button>
                <button className="icon-button">
                  <IconHeart />
                </button>
                <div className="timestamp">3m</div>
              </div>
              <div className="post-copy">
                How to Get Inspired: the Right Way - Designmodo <a href="bit.ly/1hqgbQA">bit.ly/1hqgbQA</a> Good stuff from <a href="">@designmodo!</a>
              </div>
            </div>
          </div>
        </article>

      </div>
    </main>
  );
};


export default PostList;