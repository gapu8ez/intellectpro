import React, { useState, useEffect, useRef } from "react";
import "../CSS/ImageSlider.css";

const images = [
  { image: process.env.PUBLIC_URL + "/filling.jpg" },
  { image: process.env.PUBLIC_URL + "/search.jpg" },
  { image: process.env.PUBLIC_URL + "/post.jpg" },
  { image: process.env.PUBLIC_URL + "/pregrant.jpg" },
  { image: process.env.PUBLIC_URL + "/agreement.jpg" },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(nextSlide, 3000);
    };

    const stopInterval = () => {
      clearInterval(intervalRef.current);
    };

    if (!isHovered) {
      startInterval();
    } else {
      stopInterval();
    }

    return () => stopInterval();
  }, [isHovered]);

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slider-wrapper">
        <div
          className="slider-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imageObj, index) => (
  <img
    src={imageObj.image}
    alt={`slide ${index}`}
    key={index}
    className="slide"
            />
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Image Indicators */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
