import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FAQsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import VideoSection from "./components/VideoSection";
import FormComponent from "./components/FormComponent";
import "./index.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <VideoSection />
      <FaqSection />
      <ContactSection />
     <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
