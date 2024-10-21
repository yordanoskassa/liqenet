// HowItWorks.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faChalkboardTeacher, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./HowItWorks.css"; // Import the CSS file

import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation



const steps = [
  {
    icon: faUserPlus,
    title: "Sign Up and nCreate Profile",
    description: "Sign up and create a profile for your child to get started on the platform.",
  },
  {
    icon: faChalkboardTeacher,
    title: "Choose a Teacher",
    description: "Select a qualified teacher from your home country who fits your child's needs.",
  },
  {
    icon: faLaptopCode,
    title: "Start Learning",
    description: "Begin the fun and interactive language learning sessions right away.",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleGetStarted = () => {
    navigate("/get-started"); // Navigate to the form page
  };

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Follow these simple steps to get started with your language learning journey.</p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="icon-container">
                <FontAwesomeIcon icon={step.icon} className="step-icon" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
          <button className="mobile sexy-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
