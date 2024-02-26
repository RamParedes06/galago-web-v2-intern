<<<<<<< Updated upstream
import React from 'react'
import '../styles/homepage.scss'

=======
import React from "react";
import "../styles/homepage.scss";
import NavigationBar from "../components/UI/NavigationBar";
import { Tab, Tabs, Container } from "react-bootstrap";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const Homepage = () => {
  return (
    <div>
        
      <div className="hero-section">
        <div className="hero-details">
<<<<<<< Updated upstream
        <h1>Get ready to GO!</h1>
        <p>Trot the globe or discover the beauty of the Philippines islands. Your next adventure starts here!</p>
=======
          <h1>Get ready to GO!</h1>
          <p>
            Trot the globe or discover the beauty of the Philippines <br />
            islands. Your next adventure starts here!
          </p>
>>>>>>> Stashed changes
        </div>
        
      </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

      <Container className="hero-tab-container">
        <Tabs
          defaultActiveKey="flights"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="flights" title="Flights" className="flights-tab">
            Tab content for Home
          </Tab>
          <Tab eventKey="hotels" title="Hotels">
            Tab content for Profile
          </Tab>
          <Tab eventKey="placeholder3" title=""></Tab>
          <Tab eventKey="placeholder4" title=""></Tab>
          <Tab eventKey="placeholder5" title=""></Tab>
        </Tabs>
      </Container>
    </div>
  );
};
>>>>>>> Stashed changes

      <Container className="hero-tab-container">
        <Tabs
          defaultActiveKey="flights"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="flights" title="Flights" className="flights-tab">
            Tab content for Home
          </Tab>
          <Tab eventKey="hotels" title="Hotels">
            Tab content for Profile
          </Tab>
          <Tab eventKey="placeholder3" title=""></Tab>
          <Tab eventKey="placeholder4" title=""></Tab>
          <Tab eventKey="placeholder5" title=""></Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default Homepage
