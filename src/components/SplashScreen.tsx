// src/components/SplashScreen.jsx
import "./SplashScreen.css";
import logo from "../assets/afrosec_nobg.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen flex-col">
      <img src={logo} alt="Logo" className="splash-logo h-80 w-80" />
      <div className="container">
        <div className="progress2 progress-moved">
          <div className="progress-bar2"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
