// Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#policy">Privacy Policy</a>
          <a href="#faq">FAQ</a>
          <button className="mobile sexy-button">Get Started</button>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>© 2024 Liqenet. All Rights Reserved.</p>
          <p>Email: info@liqenet.com | Phone: +1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
