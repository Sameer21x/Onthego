import React from 'react';
import './Showroom.css';

function Showroom() {
  const images = [
    { src: "/showroom-1.jpg", alt: "Medical Equipment Display" },
    { src: "/showroom-2.jpg", alt: "Medical Supplies Section" },
    { src: "/showroom-3.jpg", alt: "Healthcare Products" },
    { src: "/showroom-4.jpg", alt: "Medical Devices Display" },
    { src: "/showroom-5.jpg", alt: "Equipment Section" },
    { src: "/showroom-6.jpg", alt: "Mobility Aids Display" }
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

