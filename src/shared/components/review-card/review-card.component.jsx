import React from 'react';

import './review-card.css';
import StarFilledIcon from '../../../assets/star_filled_icon.png';
import StarOutlinedIcon from '../../../assets/star_outlined_icon.png';
import ForumIcon from '../../../assets/forum_icon.png';
import { getDateString } from '../../../utils/date.utils';

/**
 * TODO
 *  - Add onlick method that navigates to the ReviewPage with the id of the review
 *  - Add shadowing
 *  - Use elipses for a long title / content?
 */
const ReviewCard = ({
  ratingId,
  author,
  place,
  publishedDate,
  rating,
  content
}) => {
  const GenerateRatings = () => {
    const ratings = [];
    for (let i = 0; i < rating; i++) {
      ratings.push(<img key={`${ratingId}_filled_${i}`} src={StarFilledIcon} width="25px" height="25px" alt="filled star" />);
    }

    for (let i = ratings.length; i < 5; i++) {
      ratings.push(<img key={`${ratingId}_outlined_${i}`} src={StarOutlinedIcon} width="25px" height="25px" alt="filled star" />);
    }

    return ratings;
  }

  return (
    <div className="ReviewCardContainer">
      <div id="review-card-header">
        <h2>{place}</h2>
        <div>
          {GenerateRatings()}
        </div>
      </div>

      <div id="review-card-content">
        <p>{content}</p>
      </div>

      <div id="review-card-footer">
        <p>{author}</p>
        <p id="review-card-footer-date">{getDateString(publishedDate)}</p>
        <p><span><img src={ForumIcon} width="16px" height="16px" alt="forum" /></span></p>
      </div>
    </div>
  );
}

export default ReviewCard;