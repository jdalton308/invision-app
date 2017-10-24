
import React, {Component} from 'react';

import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Hero from './components/hero/hero.js';
import PostList from './components/posts/post-list.js';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

	render() {


		return (
      <div id="app">

        <Header />

        <Hero />

        <PostList />

        <Footer />

      </div>
		)
	}
}