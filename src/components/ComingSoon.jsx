import React, { useEffect, useState } from "react";
import { FiMail, FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";
import "./ComingSoon.css";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function calculateTimeLeft() {
    const launchDate = new Date("2025-08-01");
    const difference = launchDate - new Date();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className={`coming-soon-container ${isMobile ? 'mobile' : ''}`}>
      <div className="content">
        <h1 className="title">COMING SOON</h1>
        <div className="divider"></div>
        <p className="subtitle">
          We're crafting something extraordinary for you
        </p>

        <div className="timer">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="time-box">
              <span>{value}</span>
              <small>{unit}</small>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="subscription-form">
          <div className="input-group">
            {!isMobile && <FiMail className="input-icon" />}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              placeholder={isMobile ? "Email address" : "Your email address"}
              required
            />
            <button type="submit" className="notify-btn">
              {isMobile ? "SUBSCRIBE" : "GET UPDATES"}
            </button>
          </div>
          {isSubscribed && (
            <p className="success-message">Thank you for subscribing!</p>
          )}
        </form>

        <div className="social-links">
          <a href="#" className="social-icon">
            <FiTwitter />
          </a>
          <a href="#" className="social-icon">
            <FiInstagram />
          </a>
          <a href="#" className="social-icon">
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;