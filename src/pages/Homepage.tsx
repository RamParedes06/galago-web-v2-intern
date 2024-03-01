import React from "react";
import "../styles/homepage.scss";
import NavigationBar from "../components/ui/NavigationBar";
import { Tab, Tabs, Container, Nav, Button } from "react-bootstrap";
import Flights from "../components/homepage/Flights";
import BannerTexts from "../components/homepage/BannerTexts";
import Adventure from "../components/homepage/Adventure";
import phoneicon from "../resources/homepage/galago-logo-phone.png";
import TravelGuides from "../components/homepage/TravelGuides";
import Accreditations from "../components/homepage/Accreditations";
import ScrollerComponent from "../components/homepage/slider/ScrollerComponent";
import FooterComponent from "../components/ui/FooterComponent";
const Homepage = () => {
  return (
    <div>
      <NavigationBar />

      {/* Hero Section  */}
      <div className="hero-section">
        <div className="hero-details">
          <h1>Get ready to GO!</h1>
          <p>
            Trot the globe or discover the beauty of the Philippines <br />
            islands. Your next adventure starts here!
          </p>
        </div>
      </div>

      <Container className="hero-tab-container">
        <Tabs
          defaultActiveKey="flights"
          // id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="flights" title="Flights" className="flights-tab">
            <Flights />
          </Tab>
          <Tab eventKey="hotels" title="Hotels" className="hotels-tab">
            Tab content for Hotels
          </Tab>
          <Tab eventKey="placeholder3" title="" disabled></Tab>
          <Tab eventKey="placeholder4" title="" disabled></Tab>
          <Tab eventKey="placeholder5" title="" disabled></Tab>
          <Tab eventKey="placeholder6" title="" disabled></Tab>
        </Tabs>
      </Container>

      {/* Adventure  */}
      <div className="adventure-container">
        <BannerTexts
          titleclass="title"
          title="Go on an adventure!"
          subtitle="Ready to explore the Philippines and the world? Check out our latest travel promos!"
        />
        <Adventure />
      </div>

      {/* Middle Section Banner  */}
      <div className="middle-section">
        <div className="banner-one">
          <p>
            "Unforgettable experiences crafted for you by an <br />
            all-Filipino team of travel experts."
          </p>
        </div>
        <div className="banner-two"></div>
        <div className="banner-three">
          <div className="banner-three-img">
            <img src={phoneicon} alt="" />
          </div>
          <div className="banner-three-details">
            <h1>Get ready for GalaGO!</h1>
            <p>Stay tuned for the GalaGO! app coming soon in 2024!</p>
          </div>
        </div>
      </div>

      {/* Travel Guides  */}

      <TravelGuides />
      <Accreditations />

      {/* Slider  */}
      <div className="slider-container">
        <h1>Discover the best of the Philippines and beyond!</h1>
        <ScrollerComponent />
      </div>

      {/* Footer  */}
      <FooterComponent />
    </div>
  );
};

export default Homepage;
