// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import gps from '../../assets/screen-gps-fotor-bg-remover-20240228211211.png'
import landingCss from "./landing.module.css";
import realTime from "../../assets/realTime.jpeg";
import locationHistory from "../../assets/history.jpeg";
import notification from "../../assets/notification.png";


function LandingPage() {
  return (
    <>
  
      
      <div className={landingCss.landing}>
        <Navbar />

        <div className={landingCss.landingLeftSide}>
          <div className={landingCss.landingCssleft}>
            <h1>
              Welcome to our
              <br />
              <span>Location Tracker</span>
            </h1>

            <div className={landingCss.info}>
              <p>Track Your Journeys with Ease</p>
              <p>Effortlessly Keep Tabs on Your Whereabouts</p>
              <p>Stay Connected, Anywhere, Anytime</p>
            </div>
            <Link to="/sign-up">
              <button className={landingCss.btn}>Get Started Now</button>
            </Link>
          </div>

          <div className="landingCss.imageCard">
            <img className={landingCss.image} src={gps} alt="" />
          </div>
        </div>
        
      </div> 

      <div className={landingCss.ourFeatures}>
        <h2>Our Features</h2>

        <div className={landingCss.featureCards}>

          <div className={landingCss.featureCard}>
            <h3>Real-Time Tracking</h3>
            
            <ul>
              <li>Receive live updates on your location</li>
              <li>Track your speed and direction in real-time</li>
              <li>Stay informed, stay connected</li>
              
            </ul>
          </div>

          <div className={landingCss.featureCard}>
            <h3>Location History</h3>
          
            
            <ul>
              <li>Access detailed journey logs with timestamps</li>
              <li>Review your travel history at a glance</li>
              <li>Gain insights into your past adventures</li>
            </ul>
          </div>

          <div className={landingCss.featureCard}>
            <h3>Notifications</h3>
            <ul>
              <li>Get alerts for arrivals and departures</li>
              <li>Receive notifications for unusual activity</li>
              <li>Stay informed and in control of your location</li>
            </ul>
          </div>
        </div>

        <div className={landingCss.featureImgCards}>
          <img className={landingCss.featureImgCard} src={realTime} alt="" />
          <img className={landingCss.featureImgCard} src={locationHistory} alt="" />
          <img className={landingCss.featureImgCard} src={notification} alt="" />
        </div>
      </div>

      <footer className={landingCss.footer}>
        <div className={landingCss.footerContent}>
          <div className={landingCss.footerItem}>
            <h3>About Us</h3>
            <p>We are dedicated to providing innovative location tracking solutions.</p>
          </div>
          <div className={landingCss.footerItem}>
            <h3>Contact Us</h3>
            <p>Email us at: ayushmutum6.com</p>
          </div>
          <div className={landingCss.footerItem}>
            <h3>Copyright © 2024 . All rights reserved.</h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
