import React from 'react';
import showroom1 from "../../assets/images/our showroom1.jpeg"
import showroom2 from "../../assets/images/ourshowroom 2.jpeg"
import showroom3 from "../../assets/images/ourshowroom 3.jpeg"
import showroom4 from "../../assets/images/ourshowroom 4.jpeg"
import showroom5 from "../../assets/images/ourshowroom 5.jpeg"
import showroom6 from "../../assets/images/ourshowroom 6.jpeg"

import './Showroom.css';

function Showroom() {
  const images = [
    { src: showroom1, alt: "Medical Equipment Display" },
    { src: showroom2, alt: "Medical Supplies Section" },
    { src: showroom3, alt: "Healthcare Products" },
    { src: showroom4, alt: "Medical Devices Display" },
    { src: showroom5, alt: "Equipment Section" },
    { src: showroom6, alt: "Mobility Aids Display" }
  ];

  return (
    <div className="showroom-section">
      <h2>OUR SHOWROOM</h2>
      <p>
        Visit Our High Desert Showroom And Explore Top-Quality Mobility Aids, Medical Devices, And Health Essentials, From Mobility Scooter To Medical Supplies; We're Here To Support Your Well Being And Comfort.
      </p>
      <div className="showroom-grid">
        {images.map((image, index) => (
          <div key={index} className="showroom-image">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showroom;

