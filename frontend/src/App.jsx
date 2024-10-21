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
import Privacy from "./components/Policy";
import Terms from "./components/Terms";
import "./index.css"; // Import the CSS file
import Policy from "./components/Policy";

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
        <Route path="/get-started" element={<FormComponent />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
