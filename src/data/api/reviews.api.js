import data from '../stubs/reviews.json';

/**
 * Returns all Reviews
 * 
 * @returns Array<Reviews>
 */
export const getReviews = () => {
  const rawReviews = JSON.parse(localStorage.getItem('reviews'));
  return rawReviews.map((val) => {
    const { id, author, place, published_at, rating, content, response } = val;
    const review = {
      reviewId: id,
      author,
      place,
      publishedDate: new Date(published_at),
      rating,
      content
    };

    if (response !== undefined) {
      review.response = {
        message: response.message,
        name: response.name,
        postedDate: new Date(response.posted_date)
      };
    }

    return review;
  });
}

/**
 * Returns a Review by an id
 * 
 * @param {string} reviewId 
 * @returns {Object | undefined}  Review
 */
export const getReviewById = (reviewId) => {
  const rawReviews = JSON.parse(localStorage.getItem('reviews'));
  const rawReview = rawReviews.find((r) => r.id === reviewId);

  // No review with reviewId was found
  if (rawReview === undefined)
    return rawReview;

  const { id, author, place, published_at, rating, content, response } = rawReview;
  const review = {
    reviewId: id,
    author,
    place,
    publishedDate: new Date(published_at),
    rating,
    content
  };

  if (response !== undefined) {
    review.response = {
      message: response.message,
      name: response.name,
      postedDate: new Date(response.posted_date)
    };
  }
  
  return review;
}

/**
 * Creates/Updates the response of a Review
 * 
 * @param {string} reviewId 
 * @param {string} message
 * @param {string} name
 */
export const updateResponse = (reviewId, message, name) => {
  try {
    const rawReviews = JSON.parse(localStorage.getItem('reviews'));
    const reviewIndex = rawReviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex < 0) {
      throw Error(`Unable to find Review with id - ${reviewId}`);
    }

    const date = new Date(Date.now());
    const review = rawReviews[reviewIndex];
    rawReviews[reviewIndex] = {
      ...review,
      response: {
        message,
        name,
        posted_date: date.toString()
      }
    }

    localStorage.setItem('reviews', JSON.stringify(rawReviews));
  }
  catch(error) {
    console.log('Error when updating response for Review', error);
  }
}

/**
 * Delete a response of a specific Review
 * 
 * @param {string} reviewId 
 */
export const deleteResponse = (reviewId) => {
  try {
    const rawReviews = JSON.parse(localStorage.getItem('reviews'));
    const reviewIndex = rawReviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex < 0) {
      throw Error(`Unable to find Review with id - ${reviewId}`);
    }

    const review = rawReviews[reviewIndex];
    const { id, author, place, published_at, rating, content } = review;
    rawReviews[reviewIndex] = {
      id,
      author,
      place,
      published_at,
      rating,
      content
    }

    localStorage.setItem('reviews', JSON.stringify(rawReviews));
  }
  catch(error) {
    console.log('Error when deleting response for Review', error);
  }
}

// For local storage purposes only
const init = () => {
  if (localStorage.getItem('reviews') === null) {
    localStorage.setItem('reviews', JSON.stringify(data));
  }
}

init();