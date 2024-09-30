// src/components/Section.js
import React from 'react';

const Section = ({ title, description, image, link, buttonText }) => {
  return (
    <div className="section">
      <div className="text">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} className="btn-contact">{buttonText}</a>
      </div>
      <div className="image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Section;