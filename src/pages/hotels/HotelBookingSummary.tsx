import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ReservationDetails from "../../components/hotelbookingdetails/ReservationDetails";
import "../../styles/hotelbookingdetails.scss";
import NavigationBar from "../../components/ui/NavigationBar";
import FooterComponent from "../../components/ui/FooterComponent";
import ButtonComponent from "../../components/ui/ButtonComponent";
import HotelBookingProgress from "../../components/hotelbookingdetails/HotelProgressLine";
import HotelBookingModal from "../../components/hotelbookingdetails/HotelBookingModal";
import { useNavigate } from "react-router-dom";
import NavigationBarWhite from "../../components/ui/NavigationBarWhite";

const HotelBookingSummary = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalHide = () => setModalShow(false);
  let navigate = useNavigate();
  return (
    <div className="hotel-booking-summary-bg">
      <NavigationBarWhite />
      <HotelBookingProgress />
      <Container className="hotel-booking-summary-container">
        <div className="hotel-booking-summary">
          <h1 className="title-large-bold">Booking Summary</h1>
          <p className="callout-medium">
            Please review your booking before proceeding to payment!
          </p>
          <ReservationDetails />
        </div>

        <div className="hotel-booking-summary-btns">
          <ButtonComponent
            buttonText="Back"
            className="border-btn"
            style={{
              maxWidth: "250px",
              width: "100%",
              height: "60px",
              borderRadius: "12px",
            }}
            onClick={() => navigate(-1)}
          />

          <ButtonComponent
            buttonText="Proceed to Payment"
            className="default-btn"
            style={{ maxWidth: "250px", width: "100%", height: "60px" }}
            onClick={handleModalShow}
          />
        </div>

        <HotelBookingModal show={modalShow} onHide={handleModalHide} />
      </Container>

      <FooterComponent />
    </div>
  );
};

export default HotelBookingSummary;
