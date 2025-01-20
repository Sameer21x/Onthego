import React from 'react';
import './CardCarousel.css';

const CardsCarousel = ({ brands, title = "SUPPLY", subtitle = "HOSPITAL EQUIPMENT BRANDS" }) => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="carousel-container">
      <div className="title-section">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      
      <div className="carousel-wrapper">
        <button className="nav-btn prev" onClick={slideLeft}>
          &#10094;
        </button>
        
        <div className="carousel-track" id="slider">
          {brands.map((brand, index) => (
            <div key={index} className="carousel-card">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="brand-logo"
              />
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={slideRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardsCarousel;

