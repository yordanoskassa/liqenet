// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const LanguageContext = createContext();

// Translation texts for different languages
const translations = {
  en: {
    home: "Home",
    features: "Features",
    howItWorks: "How It Works",
    testimonials: "Testimonials",
    contact: "Contact",
    heroTitle: "Learn Your Heritage Language",
    heroDescription: "Connect with your roots by learning your mother tongue from experienced teachers.",
    ctaButton: "Get Started",
    whyChooseUs: "Why Choose Us?",
    experiencedTeachers: "Experienced Teachers",
    personalizedLearning: "Personalized Learning",
    communityEngagement: "Community Engagement",
    howItWorksTitle: "How It Works",
    step1: "Sign up and create a profile for your child.",
    step2: "Choose a teacher from your home country.",
    step3: "Start learning through fun and interactive online classes.",
    whatParentsSay: "What Parents Say",
    testimonial1: `"My kids love learning their mother tongue! The teachers are amazing!"`,
    testimonial2: `"This platform made it easy for my children to connect with our heritage."`,
    footer: "Contact us: info@languageschool.com"
  },
  es: {
    home: "Inicio",
    features: "Características",
    howItWorks: "Cómo Funciona",
    testimonials: "Testimonios",
    contact: "Contacto",
    heroTitle: "Aprende Tu Idioma Natal",
    heroDescription: "Conéctate con tus raíces aprendiendo tu lengua materna de maestros experimentados.",
    ctaButton: "Comenzar",
    whyChooseUs: "¿Por qué Elegirnos?",
    experiencedTeachers: "Maestros Experimentados",
    personalizedLearning: "Aprendizaje Personalizado",
    communityEngagement: "Participación Comunitaria",
    howItWorksTitle: "Cómo Funciona",
    step1: "Regístrate y crea un perfil para tu hijo.",
    step2: "Elige un maestro de tu país de origen.",
    step3: "Comienza a aprender a través de clases divertidas e interactivas en línea.",
    whatParentsSay: "Lo Que Dicen Los Padres",
    testimonial1: `"¡A mis hijos les encanta aprender su lengua materna! ¡Los maestros son increíbles!"`,
    testimonial2: `"Esta plataforma facilitó que mis hijos se conectaran con nuestra herencia."`,
    footer: "Contáctanos: info@languageschool.com"
  },
  // Add more languages as needed
};

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);
