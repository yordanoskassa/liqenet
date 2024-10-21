import React, { useState } from 'react';
import './FormComponent.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the left arrow icon
import axios from 'axios'; // For sending form data to the backend

const FormComponent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Age: '',
    Level: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track if the form is submitted

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { FirstName, LastName, Age, Level } = formData;

    axios.post('https://liqenet.kassa.dev/form', { FirstName, LastName, Age, Level })
      .then(result => {
        console.log(result);
        setFormSubmitted(true); // Set formSubmitted to true on successful submission
      })
      .catch(err => console.log(err));
  };

  const handleProceed = () => {
    window.location.href = 'https://buy.stripe.com/aEUdRubED6uS9Z64gi'; // Redirect to Stripe on proceed
  };

  return (
    <>
      <Navbar step={step} />

      <div className="form-body">
        <div className="form-container">
          {/* Conditionally render the form or success message */}
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className={`form step-${step}`}>
              {step === 1 && (
                <div className="form-page">
                  <h2 className="form-title">Step 1: Student Info</h2>
                  <div className="form-group">
                    <label htmlFor="FirstName">Student First Name</label>
                    <input
                      type="text"
                      id="FirstName"
                      name="FirstName"
                      value={formData.FirstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="LastName">Student Last Name</label>
                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      value={formData.LastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                  <button type="button" className="next-btn" onClick={nextStep}>
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form-page">
                  <h2 className="form-title">Step 2: Student Age</h2>
                  <div className="form-group">
                    <label htmlFor="Age">Age</label>
                    <input
                      type="number"
                      id="Age"
                      name="Age"
                      value={formData.Age}
                      onChange={handleChange}
                      placeholder="Enter Student's Age"
                      required
                    />
                  </div>
                  <div className="buttons">
                    <FaArrowLeft className="prev-icon" onClick={prevStep} size={24} />
                    <button type="button" className="next-btn" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-page">
                  <h2 className="form-title">Step 3: Student Level</h2>
                  <div className="form-group">
                    <label htmlFor="Level">Level</label>
                    <select
                      id="Level"
                      name="Level"
                      value={formData.Level}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="one">Level One: Start from the alphabet</option>
                      <option value="two">Level Two: Knows a few phrases</option>
                      <option value="three">Level Three: Ready for the big words</option>
                    </select>
                  </div>
                  <div className="buttons">
                    <FaArrowLeft className="prev-icon" onClick={prevStep} size={24} />
                    <button type="submit" className="sexy-button submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="success-message">
              <h2>Form Submitted Successfully!</h2>
              <p>Your registration has been completed. Please click the button below to proceed to payment.</p>
              <button className="sexy-button" onClick={handleProceed}>
                Proceed
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer step={step} />
    </>
  );
};

export default FormComponent;
