import React from 'react';
import aboutus from "../../assets/images/aboutus hero image.png"
import './AboutHero.css';

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-content">
        <h2>Convenient Location to Serve You</h2>
        <p>
        Conveniently located in Hesperia near the intersection of Bear Valley and Hesperia Road, serving the communities of Victorville, Hesperia, Apple Valley, Adelanto, Phelan and beyond.
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

