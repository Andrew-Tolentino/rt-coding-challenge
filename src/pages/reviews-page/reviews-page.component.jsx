import React, { useEffect, useState } from 'react';

import ReviewCard from '../../shared/components/review-card/review-card.component';

// Replace with a api fetching structure
import data from '../../data/stubs/reviews.json';

const ReviewsPage = () => {
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
          publishedDate: published_at,
          rating,
          content
        };
      });

      setReviews(fetchedReviews);
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <p>Loading ...</p>
    );
  }

  return (
    <>
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
          />
        );
      })}
    </>
  );
}

export default ReviewsPage;