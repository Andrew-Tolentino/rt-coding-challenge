import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReviewCard from '../../shared/components/review-card/review-card.component';
import './reviews-page.css';

// Replace with a api fetching structure
import data from '../../data/stubs/reviews.json';

/**
 * TODOS
 *  - Fix spacing between columns and container so it is symmetrical
 *   - This needs to be responsive as well
 * 
 */
const ReviewsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedReviews = data.map((val) => {
        const { id, author, place, published_at, rating, content } = val;
        return {
          ratingId: id,
          author,
          place,
          publishedDate: new Date(published_at),
          rating,
          content
        };
      });

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
        const { ratingId, author, place, publishedDate, rating, content } = review;
        return (
          <ReviewCard
            key={`${ratingId}_${publishedDate}`}
            ratingId={ratingId}
            author={author}
            place={place}
            publishedDate={publishedDate}
            rating={rating}
            content={content}
            onClick={() => navigate(`/${ratingId}`)} 
          />
        );
      })}
    </div>
  );
}

export default ReviewsPage;