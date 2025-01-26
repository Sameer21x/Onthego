import React from 'react';
import aboutus from "../../assets/images/aboutus hero image.png"
import './AboutHero.css';

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="about-content">
        <h2>Convenient Location to Serve You</h2>
        <p>
          At On The Go Medical Supply, We Pride Ourselves On Being Your Go-To Destination For All Your Medical Equipment And Supply Needs. With Over 20 Years Of Experience In The Industry, Our Professional Team Is Here To Provide Personalized Service That Fits You. Whether You Need Mobility Aids, Compression Stockings Or Need Assistance With Bath Safety Products, Our Knowledgeable Staff Is Ready To Help You Select The Perfect Items That Fit To Offer Top-Quality Products And Exceptional Service, Making Us Your Favorite Store For All Your Medical Supply Needs. Get In Today And Experience The Difference!
        </p>
      </div>
      <div className="about-image">
        <img src={aboutus} alt="Store Front" />
      </div>
    </div>
  );
}

export default AboutHero;

