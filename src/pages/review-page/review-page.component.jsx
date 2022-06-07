import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewPage = () => {
  let { id } = useParams();

  return (
    <>
      <h1>Review Page</h1>
      <h2>id - {id}</h2>
    </>
  );
}

export default ReviewPage;