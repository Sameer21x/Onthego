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
          <h3>Personalized Product Selection</h3>
          <ul>
            <li>Explore & Discover: Our experienced Mobility staff ensure the perfect fit for your new equipment, providing a comfortable and optimal shopping experience.</li>
            <li>Thorough Demonstrations: We take the time to demonstrate your new equipment, ensuring you’re confident and ready to use it before you leave our store.</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>Expert Technicians</h3>
          <ul>
            <li>Local In-House Warranty Work: We perform all warranty work locally, providing convenient after care service for our customers.</li>
            <li>Experienced technicians assemble our equipment so you don’t have to.</li>
          </ul>
        </div>

        <div className="feature-box">
          <h3>White-Glove Delivery Service</h3>
          <ul>
            <li>Hassle-Free Experience: Our local delivery service includes assembly and comprehensive training on your new equipment, allowing you to enjoy your newly purchased equipment.</li>
            <li>We offer dropship and delivery service for a fee, please call our store for details.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

