// main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext"; // Import the LanguageProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
