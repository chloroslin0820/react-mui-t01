import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import './loading-page.css'; // Import your CSS file for styling

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <CircularProgress color="secondary" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;