import React, { useState } from 'react';

// Import images directly
import venueImage1 from '../assets/images/b1.webp';
import venueImage2 from '../assets/images/b2.webp';
import venueImage3 from '../assets/images/b3.webp';
import venueImage4 from '../assets/images/b4.webp';

const VenueCard = ({ image, title, capacity, price }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={title} />
        </div>
        <div className="card-back">
          <h1 className="second-text">{title}</h1>
          <p className="second-text">Capacity: {capacity} people</p>
          <p className="second-text">Min. Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

const VenueCards = () => {
  const venues = [
    { image: venueImage1, title: 'Indoor Venue', capacity: 150, price: '$50,000' },
    { image: venueImage2, title: 'Rooftop Venue', capacity: 200, price: '$70,000' },
    { image: venueImage3, title: 'Poolside Venue', capacity: 100, price: '$40,000' },
    { image: venueImage4, title: 'Historic Venue', capacity: 120, price: '$60,000' },
  ];

  return (
    <div className="cards">
      {venues.map((venue, index) => (
        <VenueCard key={index} {...venue} />
      ))}
    </div>
  );
};

export default VenueCards;