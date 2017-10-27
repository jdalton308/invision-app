
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import ProfileHero from './profile-hero.js';
import HomeHero from './home-hero.js';



const Hero = (props) => {
  return (
    <section className="section-hero">

      <Route render={({location}) => (
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={1100}
          transitionLeaveTimeout={500}
        >
          <div key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={HomeHero} />
              <Route path="/profile" component={ProfileHero} />
            </Switch>
          </div>
        </CSSTransitionGroup>
      )}
      />
    </section>
  );
};


export default Hero;