
import React, {Component} from 'react';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

	render() {


		return (
      <div id="app">

        <header>
          <div className="header-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24">
              <g fill="none" fillRule="evenodd" stroke="#00cc99" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.556 1H5.444C2.99 1 1 3.015 1 5.5V10c0 2.486 1.99 4.5 4.444 4.5h1.668V19l4.444-4.5h5C19.01 14.5 21 12.486 21 10V5.5C21 3.015 19.01 1 16.556 1zM13 17.95c0 1.52 1.212 2.75 2.708 2.75h2.71l3.25 3.3v-3.3h1.624c1.496 0 2.708-1.23 2.708-2.75v-2.2c0-1.52-1.212-2.75-2.708-2.75"/>
              </g>
            </svg>
            <img className="logo-copy" src="/assets/img-logo-simplysocial-copy.png" alt="simplysocial"/>
          </div>


          <div className="header-actions">

            <button className="icon-button" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="39" height="33" viewBox="0 0 39 33">
                <g fill="none" fillRule="evenodd" stroke="#00cc99">
                  <path d="M19.62 20.118h-.81L12.333 26v-5.882h-.81C5.737 20.118 1 15.816 1 10.558 1 5.302 5.736 1 11.524 1h12.952C30.264 1 35 5.3 35 10.56c0 1.3-.29 2.542-.815 3.675" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M38 24.5c0 4.143-3.582 7.5-8 7.5s-8-3.357-8-7.5c0-4.142 3.582-7.5 8-7.5s8 3.358 8 7.5z"/>
                  <path d="M30.036 21v7M34 24.5h-8" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </button>

            <input type="text" className="search-input" />

            <div className="profile-dropdown">
              <img src="assets/img-profile-thumb.jpg" alt="Profile image" />
            </div>

          </div>
        </header>


        <section className="section-hero">
          <div className="content">

            <div className="new-post">
              <div className="pseudo-placeholder-input">
                <input type="text"/>
                <span className="placeholder-text">What's on your mind?</span>
              </div>

              <div className="media-actions">
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17">
                    <g fill="none" fillRule="evenodd" stroke="#fff">
                      <path d="M15 9.5c0 1.933-1.568 3.5-3.5 3.5C9.566 13 8 11.433 8 9.5S9.566 6 11.5 6C13.432 6 15 7.567 15 9.5z"/>
                      <path d="M16.216 3h3.93C21.167 3 22 4.077 22 5.153v8.89C22 15.12 21.166 16 20.147 16H2.853C1.833 16 1 15.12 1 14.044v-8.89C1 4.076 1.834 3 2.853 3h3.93M7 3l2.858-2h4.286L17 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                  Add Photo
                </button>
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16">
                    <g fill="none" fillRule="evenodd" stroke="#fff">
                      <path d="M15 13.6c0 .77-.394 1.4-.875 1.4H1.875C1.395 15 1 14.37 1 13.6V2.4c0-.77.394-1.4.875-1.4h12.25c.48 0 .875.63.875 1.4v11.2z"/>
                      <path d="M4 5h9" strokeLinecap="round"/>
                      <path d="M15 10.035l4.23 2.868c.424.288.77-.087.77-.833V3.93c0-.745-.347-1.12-.77-.833L15 5.965" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                  Add Video
                </button>
              </div>
            </div>

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
                <button className="icon-button">
                  <div className="list-icon">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </button>
                <button className="icon-button active">
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
        </section>


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


        <footer>
          <a className="footer-link" href="">ABOUT US</a>
          <a className="footer-link" href="">SUPPORT</a>
          <a className="footer-link" href="">PRIVACY</a>
          <a className="footer-link" href="">TERMS</a>
          <div className="footer-copyright">
            &copy; 2014 SIMPLYSOCIAL
          </div>
        </footer>
      </div>
		)
	}
}