import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './review-page.css';
import ReviewCard from '../../shared/components/review-card/review-card.component';
import { getDateString } from '../../utils/date.utils';
import { getReviewById, updateResponse } from '../../data/api/reviews.api';

const ReviewPage = () => {
  let { reviewId } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviewDetails, setReviewDetails] = useState(null);
  const [responseText, setResponseText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const review = getReviewById(reviewId)
      
      // Found review
      if (review !== undefined) {
        setReviewDetails(review);

        if (review.response !== undefined) {
          setResponseText(review.response.message);
        }
      }

      setLoading(false);
    }, 1000);
  }, [reviewId]);

  const onResponseSubmit = (event) => {
    if (responseText) {
      updateResponse(reviewId, responseText);

      // Update locally
      const postedDate = new Date(Date.now());
      setReviewDetails({
        ...reviewDetails,
        response: {
          message: responseText,
          postedDate
        }
      });
    }

    event.preventDefault();
  }

  if (loading) {
    return <p>Loading ...</p>
  }

  // Review not found when fetching
  if (reviewDetails === null) {
    return <h1>Could not find review with id - {reviewId}</h1>
  }

  const { author, place, publishedDate, rating, content, response } = reviewDetails;
  if (response !== undefined) {
    return (
      <div className="ReviewPageContainer">
        <ReviewCard
          reviewId={reviewId}
          author={author}
          place={place}
          publishedDate={publishedDate}
          rating={rating}
          content={content}
        />
  
        <div style={{ marginTop: "4rem" }}>
          <h2>{response.message}</h2>
          <h2>{getDateString(response.postedDate)}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="ReviewPageContainer">
      <ReviewCard
        reviewId={reviewId}
        author={author}
        place={place}
        publishedDate={publishedDate}
        rating={rating}
        content={content}
      />

      <div style={{ marginTop: "4rem" }}>
        <form onSubmit={onResponseSubmit}>
          <textarea 
            type="text"
            value={responseText} 
            onChange={(event) => setResponseText(event.target.value)}
            onBlur={() => setResponseText(responseText.trim())}
            style={{ resize: "none", width: "100%", height: "150px" }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
  
}

export default ReviewPage;