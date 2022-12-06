import React from "react";
import { useState } from "react";
import { validateEmail } from "../helpers/ValidateEmail";
import "../styles/Contact.css";

const Contact = () => {
  // SET VARIABLES FOR FIRST AND LAST NAME WITH USESTATE BEGINNING WITH EMPTY STRING FOR FORM
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  // VALIDATE EMAIL ADDRESS HERE WITH HELPERIN UTILS
  const [errorMessage, setErrorMessage] = useState("");

  // SET VARIABLE TO HANDLE CHANGES ON INPUT FORM WITH USESTATE
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "username") {
      setUserName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") setMessage(inputValue);
  };
  // SET VARIABLE TO HANDLE FORM SUBMISSIONS
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Email not valid.  Please try again");
      return;
    }

    if (!message) {
      setErrorMessage("Message needed");
      return;
    }

    setUserName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };
  return (
    <div>
      <div className="contact-head">
        <h3>
          Email me @
          <a href="mailto: sammy.pennell@yahoo.com">sammy.pennell@yahoo.com</a>
        </h3>
        <h3 className="or"> or</h3>
        <h3>Contact me with any questions:</h3>
      </div>
      <form className="form">
        <label className="label">Name:</label>
        <br></br>
        <input
          className="input-field"
          value={userName}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Please enter your name"
        />
        <br></br>
        <label>Email:</label>
        <br></br>
        <input
          className="input-field"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Please enter your email"
        />
        <br></br>
        <label>Message:</label>
        <br></br>
        <input
          className="message-field"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Please write a message here"
        />
        <br></br>
        <button className="button" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default Contact;
