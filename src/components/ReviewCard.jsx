import React from "react";

function ReviewCard({ name, img, review }) {
  return (
    <div className="review-card">
      <div className="review-card__container__img">
        <img className="review-card__img" src={img} alt="review picture" />
      </div>
      <div className="review-card__container__text">
        <p className="review-card__name">{name}</p>
        <p className="review-card__review">"{review}"</p>
      </div>
    </div>
  );
}

export default ReviewCard;
