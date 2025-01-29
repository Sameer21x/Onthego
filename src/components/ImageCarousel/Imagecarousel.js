import React, { useRef } from "react";
import "../ImageCarousel/Imagecarousel.css";
import banner1 from "../../assets/images/banner2.png"
import banner2 from "../../assets/images/reelimage1.jpeg"
import banner3 from "../../assets/images/banner3.png"
import banner4 from "../../assets/images/electricwheelchair.jpg"
import banner5 from "../../assets/images/reelimage5.jpg"
import banner6 from "../../assets/images/reelimage2.png"
import banner7 from "../../assets/images/reelimage4.jpeg"



const images = [
  { src: banner1, alt: "Image 1" }, // Directly use the imported images
  { src: banner2, alt: "Image 2" },
  { src: banner3, alt: "Image 3" },
  { src: banner4, alt: "Image 4" },
  { src: banner5, alt: "Image 5" },
  { src: banner6, alt: "Image 6" },
  { src: banner7, alt: "Image 7" },
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
