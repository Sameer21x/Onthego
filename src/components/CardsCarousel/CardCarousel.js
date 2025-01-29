import React from 'react';
import './CardCarousel.css';

const CardsCarousel = ({ brands, title = "Brands Quality You Can Rely On", subtitle = "Brand Quality You Can Rely On" }) => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (

    <div className="carousel-cardcontainer">
      <div className="cardcarousel-divider"></div>


      <div className="title-section">
        <h1>{title}</h1>
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

