import React, { useState } from 'react';
import './StarRating.css';
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const [currentRating, setCurrentRating] = useState(rating);
  const handleMouseEnter = (index) => {
    setCurrentRating(index + 1);
  };
  const handleMouseLeave = () => {
    setCurrentRating(rating);
  };
  const handleClick = (index) => {
    setCurrentRating(index + 1);
  };
  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${index < currentRating ? 'filled' : 'empty'}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
export default StarRating;