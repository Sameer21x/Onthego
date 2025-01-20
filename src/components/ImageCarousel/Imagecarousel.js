import React, { useRef } from "react";
import "../ImageCarousel/Imagecarousel.css";

const images = [
  { src: "image1.jpg", alt: "Image 1" },
  { src: "image2.jpg", alt: "Image 2" },
  { src: "image3.jpg", alt: "Image 3" },
  { src: "image3.jpg", alt: "Image 4" },
  { src: "image3.jpg", alt: "Image 5" },
  { src: "image3.jpg", alt: "Image 6" },
  { src: "image3.jpg", alt: "Image 7" },
];

const ImageCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="image-carousel">
      <button className="carousel-btn left" onClick={scrollLeft}>
        &#9664; {/* Left arrow */}
      </button>
      <div className="carousel-container" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn right" onClick={scrollRight}>
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageCarousel;
