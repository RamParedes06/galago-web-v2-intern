import React from "react";
import { Button, Container } from "react-bootstrap";
import islandhopping from "../../resources/promos/Island Hopping.jpg";
import whitebeach from "../../resources/promos/White Beach.jpg";
import chocolatehills from "../../resources/promos/chocolate hills.jpg";
import ButtonComponent from "../ui/ButtonComponent";

function LatestPromos() {
  return (
    <Container className="latest-promos-container">
      <div className="adv-col1">
        <h1>Set out for adventure!</h1>
        <p>
          Make your adventures memorable! Experience stress-free travel where
          solitude and serenity are your trusted companions. Check out our
          latest promotions and deals that suit your needs.
        </p>
        <ButtonComponent
          className="border-btn"
          buttonText="See Latest Promos"
        />
      </div>

      <div className="grid-cols">
        <div className="grid-col">
          <img src={islandhopping} alt="" className="one" />
          <div className="grid-details two">
            <h1>Island Hopping</h1>
            <p>
              Island hopping in El Nido unveils a breathtaking natural
              wonderland of secluded lagoons and captivating landscapes.
            </p>
          </div>
        </div>
        <div className="grid-col">
          <img src={whitebeach} alt="" className="three" />
          <div className="grid-details four">
            <h1>White Beach, please!</h1>
            <p>
              Boracay's world-renowned White Beach, known for its powdery white
              sand and crystal-clear waters, making it a prime destination for
              swimming, water sports, and vibrant beachfront nightlife.
            </p>
          </div>
        </div>
        <div className="grid-col">
          <img src={chocolatehills} alt="" className="five" />
          <div className="grid-details six">
            <h1>Sweet as Chocolate Hills!</h1>
            <p>
              An otherworldly landscape of more than 1,000 perfectly cone-shaped
              hills that magically transform into a rich cocoa hue during the
              dry season.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LatestPromos;
