import React from 'react';
import aboutus from "../../assets/images/aboutus hero image.png"
import './AboutHero.css';

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-content">
        <h2>Convenient Location to Serve You</h2>
        <p>
        At On The Go Medical Supply, we’re more than just a store—we’re your dedicated partner in health and mobility. With over 20 years of experience, we understand that the right medical equipment can make a world of difference in your daily life.
        <br></br><br></br>Visit us today and experience the care, quality, and convenience that make us the preferred choice for medical supplies.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutus} alt="Store Front" />
      </div>
    </div>
  );
}

export default AboutHero;

