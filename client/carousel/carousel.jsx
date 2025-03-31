// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const slidesData = [
  {
    image: 'https://via.placeholder.com/800x400?text=Slide+1',
    title: 'Slide 1',
    description: 'This is the description for Slide 1',
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Slide+2',
    title: 'Slide 2',
    description: 'This is the description for Slide 2',
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Slide+3',
    title: 'Slide 3',
    description: 'This is the description for Slide 3',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
