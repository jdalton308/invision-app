
import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import ProfileHero from './profile-hero.js';
import HomeHero from './home-hero.js';



const Hero = (props) => {
  return (
    <section className="section-hero">

      <Route exact path="/" component={HomeHero} />
      <Route path="/profile" component={ProfileHero} />

    </section>
  );
};


export default Hero;