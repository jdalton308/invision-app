
import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Hero from './components/hero/hero.js';
import PostList from './components/posts/post-list.js';


class App extends Component {

  constructor(props) {
    super(props);
  }

	render() {
		return (
      <div id="app">

        <Header />

        <Hero />

        {/* Route only used here to choose data set of PostList */}
        <Route path="/profile" children={({ match }) => (
          <PostList
            isProfile={match}
          />
        )} />

        <Footer />

      </div>
		)
	}
}


export default App;