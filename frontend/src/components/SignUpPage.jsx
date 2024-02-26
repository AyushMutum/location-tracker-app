// components/SignUpPage.js
import React from 'react';
import { Link } from 'react-router-dom';
function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      {/* Sign up form will go here */}

      <p>Already a user?</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default SignUpPage;
