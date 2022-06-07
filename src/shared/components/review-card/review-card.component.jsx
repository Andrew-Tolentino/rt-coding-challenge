import React from 'react';

import './review-card.css';
import StarFilledIcon from '../../../assets/star_filled_icon.png';
import StarOutlinedIcon from '../../../assets/star_outlined_icon.png';
import ForumIcon from '../../../assets/forum_icon.png';

/**
 * TODO
 *  - Add onlick method that navigates to the ReviewPage with the id of the review
 *  - Add shadowing
 *  - Use elipses for a long title / content?
 *  - Create icon for response
 *  - Add 0 in date for month and day when val <= 9
 */
const ReviewCard = ({
  ratingId,
  author,
  place,
  publishedDate,
  rating,
  content
}) => {
  const date = new Date(publishedDate);

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
      <div id="header">
        <h2>{place}</h2>
        <div>
          {GenerateRatings()}
        </div>
      </div>

      <div id="content">
        <p>{content}</p>
      </div>

      <div id="footer">
        <p>{author}</p>
        <p id="footer-date">{date.getMonth()}/{date.getDate()}/{date.getFullYear()}</p>
        <p><span><img src={ForumIcon} width="16px" height="16px" alt="forum" /></span></p>
      </div>
    </div>
  );
}

export default ReviewCard;