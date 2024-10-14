// LanguageSelector.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Flag from "react-world-flags"; // Importing the flag component

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button 
        className={`flag-button ${language === "en" ? "active" : ""}`} 
        onClick={() => changeLanguage("en")}
      >
        <Flag code="USA" alt="English" height="24" />
      </button>
      <button 
        className={`flag-button ${language === "am" ? "active" : ""}`} 
        onClick={() => changeLanguage("am")}
      >
        <Flag code="ETH" alt="Amharic" height="24" />
      </button>
    </div>
  );
};

export default LanguageSelector;
