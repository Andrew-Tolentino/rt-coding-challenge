import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RootLayout from './shared/layouts/root-layout/root-layout.component';
import ReviewsPage from './pages/reviews-page/reviews-page.component';
import ReviewPage from './pages/review-page/review-page.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ReviewsPage />} />
        <Route path=":reviewId" element={<ReviewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
