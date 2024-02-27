import React from "react";
import "../styles/homepage.scss";
import NavigationBar from "../components/ui/NavigationBar";
import { Tab, Tabs, Container, Nav, Button } from "react-bootstrap";
import Flights from "../components/homepage/Flights";
import BannerTexts from "../components/homepage/BannerTexts";
import Adventure from "../components/homepage/Adventure";

const Homepage = () => {
  return (
    <div>
      <NavigationBar />

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
          title="Go on an adventure!"
          subtitle="Ready to explore the Philippines and the world? Check out our latest travel promos!"
        />
        <Adventure />
      </div>


    </div>
  );
};

export default Homepage;
