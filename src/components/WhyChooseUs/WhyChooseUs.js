import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <div className="why-choose-section">
      <h2>WHY CHOOSE ON THE GO MEDICAL SUPPLY</h2>
      <p>
        While You May Find Lower Prices For Medical Equipment Online, On The Go Medical Supply Offers A Unique Set Of Value-Added Services That Enhance Your Ownership Experience, Making Our Offerings More Cost-Effective When Comparing The Full Range Of Services We Provide Against Our Competitors.
      </p>
      
      <div className="features-grid">
        <div className="feature-box">
          <h3>Personalized Equipment Fitting</h3>
          <ul>
            <li>Expert & Detailed: Our Personalized Mobility Guides Ensure The Perfect Fit For Your New Equipment Through A Comprehensive And Thorough Evaluation</li>
            <li>Through Demonstrations Are Like The Time To Understand How Your Equipment, Enabling You To Confident And Ready To Use It Before You Leave</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>Expert Technicians</h3>
          <ul>
            <li>Certified Professionals: Our In-House Technicians Are Factory-Trained To Handle Both Repairs And New Equipment Installations, Ensuring Expert Service Every Time</li>
            <li>Local & Reliable Warranty Work: We Offer Faster Response Times And Providing Faith And More Convenient Service Than Our Competitors</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>White-Glove Delivery Service</h3>
          <ul>
            <li>Hassle-Free Convenience: Our Local Delivery Service Includes Assembly, Installation, And Set-Up</li>
            <li>Equipment Training On Your Schedule: Our Delivery Team Ensures You're Fully Confident And Ready Without The Wait</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

