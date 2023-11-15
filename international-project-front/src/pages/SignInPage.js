import React, { useState } from 'react';
import "../assets/GeneralStyles.css"
import SignInForm from '../components/SignInForm';
import "../assets/SignIn.css"
import SignUpForm from '../components/SignUpForm';

export default function SignInPage() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className={containerClass} id="container">
      <SignInForm />
      <SignUpForm />
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => handleOnClick("signIn")}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, World Traveler!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost "
              id="signUp"
              onClick={() => handleOnClick("signUp")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
