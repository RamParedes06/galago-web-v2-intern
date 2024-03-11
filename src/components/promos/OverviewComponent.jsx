import React, { Component, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";

// Images
import packageA from "../../resources/promos/Fareways_Bluewater.jpg";
import packageB from "../../resources/promos/the-altabriza-resort.jpg";
import packageC from "../../resources/promos/the muse.jpg";
import packageD from "../../resources/promos/AS.jpg";
import packageE from "../../resources/promos/hennan.jpg";
import packageF from "../../resources/promos/HENANN.jpg";

// CenteredModel.jsx
import CenteredModal from "./CenteredModal";
import ReceivedModal from "./ReceivedModal";

function OverviewComponent() {
  // Centered Modal
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalHide = () => setModalShow(false);

  const handleModalSubmit = () => {
    console.log("Submit button clicked");
    setShowReceivedModal(true);
  };

  //   ReceivedModal
  const [showReceivedModal, setShowReceivedModal] = useState(false);
  const handleModalReceivedHide = () => setShowReceivedModal(false);

  const overviewData = [
    {
      title: "PACKAGE A",
      hotel: "Fairways & Bluewater",
      image: packageA,
      daysNights: "3 DAYS / 2 NIGHTS",
      price_quadruple: "PHP 10,999",
      price_other: "PHP 10,999",
    },
    {
      title: "PACKAGE B",
      hotel: "Altabriza",
      image: packageB,
      daysNights: "4 DAYS / 3 NIGHTS",
      price_quadruple: "PHP 12,999",
      price_other: "PHP 14,999",
    },

    {
      title: "PACKAGE C",
      hotel: "The Muse",
      image: packageC,
      daysNights: "3 DAYS / 2 NIGHTS",
      price_quadruple: "PHP 11,999",
      price_other: "PHP 10,999",
    },

    {
      title: "PACKAGE D",
      hotel: "Astoria Current",
      image: packageD,
      daysNights: "4 DAYS / 3 NIGHTS",
      price_quadruple: "PHP 13,999",
      price_other: "PHP 15,999",
    },

    {
      title: "PACKAGE E",
      hotel: "Henann Regency",
      image: packageE,
      daysNights: "3 DAYS / 2 NIGHTS",
      price_quadruple: "",
      price_other: "PHP 13,999",
    },

    {
      title: "PACKAGE F",
      hotel: "Henann Regency",
      image: packageF,
      daysNights: "4 DAYS / 3 NIGHTS",
      price_quadruple: "PHP 11,999",
      price_other: "PHP 16,999",
    },
  ];

  return (
    <Container>
      <div className="overview-txt">
        <h1>Promo Overview</h1>
        <p>Every package includes hotels of the same class</p>
      </div>

      <div className="overview-component">
        <div className="overview-grid">
          {overviewData.map((overview) => (
            <div className="overview-card">
              <div className="overview-image">
                <img src={overview.image} alt={overview.image} />
                <div className="overlay">{overview.hotel}</div>
              </div>
              <div className="overview-details">
                <h1>{overview.title}</h1>
                <h2>{overview.daysNights}</h2>
                <div className="pax-quadruple">
                  <p>Pax Quadruple</p>
                  {overview.price_quadruple && (
                    <>
                      <h3 className="for-only">
                        for only <span>{overview.price_quadruple}</span>
                      </h3>

                      <hr className="mid-hr" />
                    </>
                  )}
                </div>
                <div className="pax-others">
                  <p>Pax Twin / Triple / Child with Bed</p>
                  <h4>(below 6y/o)</h4>
                  <h3 className="for-only">
                    for only <span>{overview.price_other}</span>{" "}
                  </h3>
                </div>

                {/* Change modal state to true (show modal) */}
                <Button className="book-now" onClick={handleModalShow}>
                  Book Now!
                </Button>
                {/* Show when modalshow = true, hide when its false  */}
              </div>
            </div>
          ))}
          <CenteredModal
            show={modalShow}
            onHide={handleModalHide}
            onSubmit={handleModalSubmit}
          />
          <ReceivedModal
            show={showReceivedModal}
            onHide={handleModalReceivedHide}
          />
        </div>
      </div>
    </Container>
  );
}

export default OverviewComponent;
