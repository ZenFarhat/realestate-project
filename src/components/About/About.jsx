import React from "react";
import "../../styles/styles.css";

function About() {
  return (
    <div className='About section' id='about'>
      <h1 className='section__heading'>How it works</h1>
      <hr className='blueHr' />
      <div className='about__cards'>
        <div className='about__card'>
          <div className='about__icon'>
            <i class='fas fa-search-location aboutIcon'></i>
          </div>
          <div className='about__text'>
            <h2>Search</h2>
            <p>
              Find a home or space from our search bar. Enter your location,
              property type & price range.
            </p>
          </div>
        </div>
        <div className='about__card'>
          <div className='about__icon'>
            <i class='far fa-building aboutIcon'></i>
          </div>
          <div className='about__text'>
            <h2>Pick the perfect property</h2>
            <p>
              Browse through hundreds of properties from verified agents, what
              you see is what you get.
            </p>
          </div>
        </div>
        <div className='about__card'>
          <div className='about__icon'>
            <i class='fas fa-laptop-house aboutIcon'></i>
          </div>
          <div className='about__text'>
            <h2>Book an inspection time</h2>
            <p>
              Book a time you'd like to inspect the house easily from our
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
