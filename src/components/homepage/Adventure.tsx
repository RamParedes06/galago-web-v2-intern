import { Button, Container } from "react-bootstrap";

// Adventures Learn More
import elnido from "../../resources/homepage/el nido.jpg";
import boracay from "../../resources/homepage/boracay.jpg";
import hongkong from "../../resources/homepage/hongkong.jpg";
import bohol from "../../resources/homepage/bohol.jpg";
import "../../styles/adventure.scss";
import ButtonComponent from "../ui/ButtonComponent";
// import { Link } from 'react-router-dom';

const adventureData = [
  {
    image: elnido,
    title: "Escape to El Nido",
    description: "As low as ₱13,999",
    overlay: "Flight Package",
    link: "/elnidopage",
  },
  {
    image: boracay,
    title: "Experience Boracay!",
    overlay: "Flight Package",
    description: "As low as ₱10,999",
  },
  {
    image: hongkong,
    title: "Fly to Hong Kong",
    overlay: "Flight Package",
    description: "Buy 1, Get 1 for $205*",
  },
  {
    image: bohol,
    title: "Discover Bohol!",
    overlay: "Hotel Package",
    description: "As low as ₱13,660",
  },
];

function Adventure() {
  return (
    <Container className="adv-container">
      <div className="adv-cards-wrapper">
        {adventureData.map((adventure) => (
          <div className="adv-card">
            <img src={adventure.image} alt={adventure.image} />
            <div className="adv-card-details">
              <h1> {adventure.title}</h1>
              <p> {adventure.description}</p>
            </div>
            <div className="adv-overlay">
              <p>{adventure.overlay}</p>
            </div>
            {/* <Link to={adventure.link} style={{ textDecoration: "none" }}> */}
            <ButtonComponent buttonText="Learn More" buttonClass="border-btn" />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Adventure;
