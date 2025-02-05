import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../pages/Carousel.css';

const carouselItems = [
  {
    image: 'https://www.khandelwalhospital.com/slides/silder-img3.jpg',
    title: 'State-of-the-Art Facilities',
    description: 'Experience healthcare excellence with our modern medical facilities'
  },
  {
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Advanced Operation Theaters',
    description: 'Equipped with the latest surgical technology for precise procedures'
  },
  {
    image: 'https://www.khandelwalhospital.com/slides/silder-img1.jpg',
    title: 'Expert Medical Team',
    description: 'Dedicated professionals committed to your health and well-being'
  },
  {
    image: 'https://www.khandelwalhospital.com/images/img_2.jpeg',
    title: 'Doctors Day Celebration',
    description: 'Celebrating doctors day with the dedicated team'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="carousel-container" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
