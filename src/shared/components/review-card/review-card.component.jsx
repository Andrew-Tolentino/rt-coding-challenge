import React from 'react';

import './review-card.css';
import StarFilledIcon from '../../../assets/star_filled_icon.png';
import StarOutlinedIcon from '../../../assets/star_outlined_icon.png';
import ForumIcon from '../../../assets/forum_icon.png';
import { getDateString } from '../../../utils/date.utils';

const ReviewCard = ({
  reviewId,
  author,
  place,
  publishedDate,
  rating,
  content,
  hasResponse=false,
  overflow=false,
  onClick
}) => {
  const GenerateRatings = () => {
    const ratings = [];
    for (let i = 0; i < rating; i++) {
      ratings.push(
        <img 
          key={`${reviewId}_filled_${i}`} 
          src={StarFilledIcon} 
          width="25px" 
          height="25px" 
          alt="filled star" 
        />
      );
    }

    for (let i = ratings.length; i < 5; i++) {
      ratings.push(
        <img 
          key={`${reviewId}_outlined_${i}`} 
          src={StarOutlinedIcon} 
          width="25px" 
          height="25px" 
          alt="outlined star" 
        />
      );
    }

    return ratings;
  }

  return (
    <div 
      className="ReviewCardContainer" 
      onClick={() => {
        if (onClick)
          onClick();
      }}
    >
      <div id="review-header">
        <h2>{place}</h2>
        <div id="ratings">
          {GenerateRatings()}
        </div>
      </div>

      <div id="review-content">
        <p id={`${overflow ? "overflow" : ""}`}>{content}</p>
      </div>

      <div id="review-footer">
        <div style={{ display: "flex" }}>
          <p>{author}</p>
          <p id="review-footer-date">{getDateString(publishedDate)}</p>
        </div>
        {hasResponse && <img src={ForumIcon} width="16px" height="16px" alt="forum" />}
      </div>
    </div>
  );
}

export default ReviewCard;