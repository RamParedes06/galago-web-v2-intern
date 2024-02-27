import React from "react";
import "../styles/homepage.scss";
import NavigationBar from "../components/UI/NavigationBar";

const Homepage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="hero-section">
        <div className="hero-details">
          <h1>Get ready to GO!</h1>
          <p>
            Trot the globe or discover the beauty of the Philippines islands.
            Your next adventure starts here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
