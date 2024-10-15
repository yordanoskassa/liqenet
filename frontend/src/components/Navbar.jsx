import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const { translations } = useLanguage(); // Use translations from the context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateHomeAndScroll = (e, section) => {
    e.preventDefault(); // Prevent the default link behavior
    window.location.href = `/${section}`; // Go to the home page and append the section ID
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>LIQENET</span>
          <span> </span>
          <span className="grey">ሊቀነት</span>
        </a>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/" onClick={(e) => navigateHomeAndScroll(e, "")}>{translations.home}</a></li>
        <li><a href="/" onClick={(e) => navigateHomeAndScroll(e, "#features")}>{translations.features}</a></li>
        <li><a href="/" onClick={(e) => navigateHomeAndScroll(e, "#how-it-works")}>{translations.howItWorks}</a></li>
        <li><a href="/" onClick={(e) => navigateHomeAndScroll(e, "#testimonials")}>{translations.testimonials}</a></li>
        <li><a href="/" onClick={(e) => navigateHomeAndScroll(e, "#contact")}>{translations.contact}</a></li>
      </ul>

      {/* Language Selector */}
      <div className="language-selector">
      </div>
    </nav>
  );
};

export default Navbar;
