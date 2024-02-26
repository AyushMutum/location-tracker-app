import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to our Location Tracker</h1>
      <Link to="/sign-up">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default LandingPage;
