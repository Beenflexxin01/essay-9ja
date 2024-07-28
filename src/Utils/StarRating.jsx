import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, totalStars = 5 }) => {
  const getStarClass = (index) => {
    if (rating >= index + 1) {
      return "filled";
    } else if (rating > index && rating < index + 1) {
      return "half-filled";
    } else {
      return "";
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={`star ${getStarClass(index)}`}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number,
};

export default StarRating;
