import React from "react";
import "../../styles/hotelbookingdetails.scss";
import { Container, Form } from "react-bootstrap";
import ButtonComponent from "../../components/ui/ButtonComponent";
import BookingSummary from "../Flights/BookingSummary";
import BookingSummaryCard from "../../components/flightbookingdetails/BookingSummaryCard";
import NavigationBar from "../../components/ui/NavigationBar";
import FooterComponent from "../../components/ui/FooterComponent";
import ReservationDetails from "../../components/hotelbookingdetails/ReservationDetails";
const HotelBookingDetails = () => {
  return (
    <div className="hotel-booking-details-bg">
      <NavigationBar />
      <Container className="hotel-booking-details-container">
        <div className="hotel-booking-left-col">
          <div className="guest-information-container">
            <h1 className="title-large-bold">Guest Information</h1>
            <p>Please confirm these details before we proceed to payment!</p>
            <div className="guest-radio-btns">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  I'm the Guest
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  I'm booking for someone else
                </label>
              </div>
            </div>
            <div className="guest-information-form">
              <div className="title-name-wrapper">
                <Form.Select
                  className="mb-3 booking-detail-input"
                  aria-label="Default select example"
                >
                  <option>Title</option>
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                </Form.Select>
                <Form.Group className="mb-3 " controlId="">
                  <Form.Control
                    className="booking-detail-input"
                    type="name"
                    placeholder="First Name*"
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  className="booking-detail-input"
                  type="name"
                  placeholder="Middle Name (Optional)"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  className="booking-detail-input"
                  type="name"
                  placeholder="Last Name*"
                />
              </Form.Group>
              <p className="text-secondary0 footnote-medium  pb-3">
                Make sure it matches the name on your passport or any valid
                government IDs.
              </p>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  className="booking-detail-input"
                  type="email"
                  placeholder="Email Address*"
                />
              </Form.Group>

              <div className="mobile-num-container">
                <Form.Select
                  className="mb-3 booking-detail-input"
                  aria-label="Default select example"
                >
                  <option>+63</option>
                  <option>+62</option>
                  <option>+61</option>
                  <option>+60</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control
                    className="booking-detail-input"
                    type="name"
                    placeholder="Mobile Number (Optional)"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="cancellation-policy-container">
            <h1 className="title-large-bold">Cancellation Policy</h1>
            <div className="refundable-wrapper">
              <p className="text-success callout-semibold">Refundable</p>
              <p>Until September 11, 2023 (11:59pm)</p>
            </div>
            <div className="partially-refundable-wrapper">
              <p className="text-accent-dark callout-semibold">
                Partially Refundable
              </p>
              <p>PHP 2,500 is refundable until September 11, 2023 (11:59pm)</p>
            </div>
            <div className="non-refundable-wrapper">
              <p className="text-error callout-semibold">Non-Refundable</p>
              <p>Starting September 12, 2023 (12:00 am)</p>
            </div>
          </div>

          <ButtonComponent
            buttonText="Continue"
            className="default-btn"
            style={{ width: "100%", marginTop: "60px", height: "60px" }}
          />
        </div>

        <div className="hotel-booking-right-col">
          <ReservationDetails />
        </div>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default HotelBookingDetails;
