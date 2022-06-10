import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ReviewCard from '../../shared/components/review-card/review-card.component';
import ResponseCard from '../../shared/components/response-card/response-card.component';
import { getReviewById, updateResponse, deleteResponse } from '../../data/api/reviews.api';

const ReviewPage = () => {
  let { reviewId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [reviewDetails, setReviewDetails] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [nameText, setNameText] = useState('');

  const [editResponseFlag, setEditResponseFlag] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const review = getReviewById(reviewId)
      
      // Found review
      if (review !== undefined) {
        setReviewDetails(review);

        if (review.response !== undefined) {
          setResponseText(review.response.message);
          setNameText(review.response.name);
          setEditResponseFlag(false);
        }
      }

      setLoading(false);
    }, 1000);
  }, [reviewId]);

  const onResponseSubmit = (event) => {
    if (responseText && nameText) {
      updateResponse(reviewId, responseText, nameText);

      // Update locally
      const postedDate = new Date(Date.now());
      setReviewDetails({
        ...reviewDetails,
        response: {
          message: responseText,
          name: nameText,
          postedDate
        }
      });

      setEditResponseFlag(false);
    }

    event.preventDefault();
  }

  const onDeleteResponse = () => {
    deleteResponse(reviewId);

    // Update locally
    setEditResponseFlag(true);
    setResponseText('');
    setNameText('');
    setReviewDetails({
      ...reviewDetails,
      response: undefined
    });
  }

  if (loading) {
    return <p>Loading ...</p>
  }

  // Review not found when fetching
  if (reviewDetails === null) {
    return <h1>Could not find review with id - {reviewId}</h1>
  }

  const { author, place, publishedDate, rating, content, response } = reviewDetails;
  if (!editResponseFlag) {
    const { message, name, postedDate } = response;
    const menuItems = [{ title: 'Edit', onClick: () => setEditResponseFlag(true) }, { title: 'Delete', onClick: () => onDeleteResponse() }];
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
          <ResponseCard 
            message={message}
            name={name}
            postedDate={postedDate}
            menuItems={menuItems}
            onIconClick={() => navigate('/')}
          />
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
            placeholder="Enter your response"
            value={responseText} 
            onChange={(event) => setResponseText(event.target.value)}
            onBlur={() => setResponseText(responseText.trim())}
            style={{ resize: "none", width: "100%", height: "150px" }}
          />
          <input 
            type="text"
            placeholder="Enter your name"
            value={nameText}
            onChange={(event) => setNameText(event.target.value)}
            onBlur={() => setNameText(nameText.trim())}
          />
          <input type="submit" value="Submit" />
          {response !== undefined && <button type="button" onClick={() => setEditResponseFlag(false)}>Cancel</button>}
        </form>
      </div>
    </div>
  );
}

export default ReviewPage;