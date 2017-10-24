
import React, {Component} from 'react';


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
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path fill="none" fillRule="evenodd" stroke="#bec3cc" d="M5.048 2.667S11 1.667 11 10C9.095 5 5.048 6.667 5.048 6.667v2.666L1 4.667 5.048 0v2.667z" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path fill="none" fillRule="evenodd" stroke="#bec3cc" d="M6 11s5-3.713 5-7.227C11 .26 6.563-.01 6 3.505 5.437-.01 1 .26 1 4.045 1 7.828 6 11 6 11z" strokeLinejoin="round"/>
                  </svg>
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