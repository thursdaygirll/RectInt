import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/michael-wave-gVkAiPchYhY-unsplash.jpg';
import image2 from '../assets/images/aneta-pawlik-GJwKzsxUQu4-unsplash.jpg';
import image3 from '../assets/images/aniket-narula-5_mQ5qhfCE4-unsplash.jpg';

const Banner = () => {
  const images = [image1, image2, image3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="banner">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Banner ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
        />
      ))}
      <div className="banner-content">
        <h1>EventMate</h1>
        <p>Tu amigo para una planeación de eventos sencilla y cómoda</p>
      </div>
    </div>
  );
};

export default Banner;