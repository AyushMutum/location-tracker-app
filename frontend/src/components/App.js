// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import LoginInPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Dashboard from './Dashboard/Dashboard';
// import Navbar from './Navbar/Navbar';

import AppCss from '../App.modules.css'

function App() {
  
  return (
    <div >
   
    <Router>
 
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
