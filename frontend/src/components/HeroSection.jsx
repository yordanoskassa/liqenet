import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleGetStarted = () => {
    navigate("/get-started"); // Navigate to the form page
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Teach Your Child Amharic!</h1>
        <p className="hero-description">
          Liqenet is a platform where the best Amharic teachers from Ethiopia teach your children their own language.
        </p>

        <button className="sexy-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
