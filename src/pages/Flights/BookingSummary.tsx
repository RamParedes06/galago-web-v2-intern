import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/flightbookingdetails.scss";
import "../../styles/bookingsummary.scss";
import NavigationBar from "../../components/ui/NavigationBar";
import FlightProgressLine from "../../components/flightbookingdetails/FlightProgressLine";
import FooterComponent from "../../components/ui/FooterComponent";
import ButtonComponent from "../../components/ui/ButtonComponent";
import BookingSummaryCard from "../../components/flightbookingdetails/BookingSummaryCard";
import { Link } from "react-router-dom";
import NavigationBarWhite from "../../components/ui/NavigationBarWhite";

const BookingSummary = () => {
  return (
    <>
      <NavigationBarWhite />
      <FlightProgressLine />
      <Container className="booking-summary-container">
        <div className="booking-summary-header">
          <h1>Booking Summary</h1>
          <p className="callout-medium">
            Review your booking before proceeding to payment
          </p>
        </div>

        <BookingSummaryCard showAlternateContent={false} />
        <div className="booking-summary-btns">
          <ButtonComponent
            buttonText="Back"
            className="border-btn"
            style={{ maxWidth: "318px", width: "100%", borderRadius: "12px" }}
          />

          <div className="btn-summary2">
            <Link to={"/booking-confirmation"}>
              <ButtonComponent
                buttonText="Proceed to Payment"
                className="default-btn"
                style={{ maxWidth: "318px", width: "100%" }}
              />
            </Link>
          </div>
        </div>
      </Container>

      <FooterComponent />
    </>
  );
};

export default BookingSummary;
