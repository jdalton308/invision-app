
import React, {Component} from 'react';
import ProfileHero from './profile-hero.js';
import HomeHero from './home-hero.js';

import { Route } from 'react-router-dom'


const Hero = (props) => {
  return (
    <section className="section-hero">

      <Route exact path="/" component={HomeHero} />
      <Route path="/profile" component={ProfileHero} />

    </section>
  );
};


export default Hero;