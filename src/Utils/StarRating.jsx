import React from "react";
import ReactStars from "react-stars";

const StarRating = ({ rating, totalStars = 5, onRatingChange }) => {
  return (
    <div className="star-rating">
      <ReactStars
        count={totalStars}
        value={rating}
        size={24}
        half={true}
        onChange={onRatingChange}
        color2={"#EC9901"}
        edit={false}
      />
    </div>
  );
};

export default StarRating;
