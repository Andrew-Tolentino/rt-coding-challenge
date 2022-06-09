import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReviewCard from '../../shared/components/review-card/review-card.component';
import './reviews-page.css';
import { getReviews } from '../../data/api/reviews.api';

const ReviewsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedReviews = getReviews();
      setReviews(fetchedReviews);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <p>Loading ...</p>
    );
  }

  return (
    <div className="ReviewsPageContainer">
      {reviews.map((review) => {
        const { reviewId, author, place, publishedDate, rating, content } = review;
        return (
          <ReviewCard
            key={`${reviewId}_${publishedDate}`}
            reviewId={reviewId}
            author={author}
            place={place}
            publishedDate={publishedDate}
            rating={rating}
            content={content}
            onClick={() => navigate(`/${reviewId}`)} 
          />
        );
      })}
    </div>
  );
}

export default ReviewsPage;