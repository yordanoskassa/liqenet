// FeaturesSection.js
import React from "react";
import image2 from "../assets/images/images2.jpg";
import image3 from "../assets/images/images3.jpg";
import image4 from "../assets/images/images4.jpg";
import "./Features.css"; // Import the CSS file

const featuress = [
  {
    image: image2, // Use the imported local image
    title: "Experienced Teachers",
    description: "Learn from native-speaking, experienced teachers who bring years of teaching expertise to help your child become proficient.",
  },
  {
    image: image3, // Use the imported local image
    title: "Personalized Learning",
    description: "Enjoy a customized one-to-one learning experience tailored to your child's specific needs, pace, and goals.",
  },
  {
    image: image4, // Use the imported local image
    title: "Not Just the Language",
    description: "Your child will learn different Ethiopian games and songs that you grew up with. Building them a firm background of their identity.",
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose Our Platform</h2>
        <p className="section-subtitle">Explore the top features that make us the best choice for language learning.</p>

        <div className="features-grid">
          {featuress.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="image-container">
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
