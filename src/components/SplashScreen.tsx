// src/components/SplashScreen.jsx
import React from "react";
import "./SplashScreen.css";
import logo from "../assets/afrosec_nobg.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen flex-col">
      <img src={logo} alt="Logo" className="splash-logo h-80 w-80" />
      <div className="loading-animation">Loading...</div>{" "}
      {/* Optional loading animation */}
    </div>
  );
};

export default SplashScreen;
