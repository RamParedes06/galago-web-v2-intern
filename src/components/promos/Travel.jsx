import React from "react";
import { Container } from "react-bootstrap";

// // Travel Inspirations
import travel1 from "../../resources/promos/travel1.jpg";
import travel2 from "../../resources/promos/travel2.jpg";
import travel3 from "../../resources/promos/travel3.jpg";

function Travel() {
  const travelData = [
    {
      image: travel1,
      description: "September 25, 2023",
      readTime: 6,
      title: "Discover the Best Things to Do in Bohol All in One Tour!",
    },
    {
      image: travel2,
      description: "September 25, 2024",
      readTime: 4,
      title: "Guide to Travel Requirements in the Philippines",
    },
    {
      image: travel3,
      description: "September 25, 2023",
      readTime: 9,
      title: "How to Survive NAIA Immigration?",
    },
  ];
  return (
    <Container className="travel">
      <div className="travel-banner">
        <h1>Looking for Travel Inspirations?</h1>
        <p>Check out our travel-blogs made for you!</p>
      </div>

      <div className="travel-grid">
        {travelData.map((travel) => (
          <div className="travel-card">
            <div className="travel-tip">Travel Tip</div>
            <img src={travel.image} alt="" />

            <div className="travel-card-details">
              <p>
                {travel.description} · {travel.readTime} min read
              </p>
              <h1>{travel.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Travel;
