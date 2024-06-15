import React from 'react';
import { Link } from 'react-router-dom';
import './error-page.css';

const ErrorPage = () => {
  return (
    <div className="error_page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button className="error_page_button">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
