import React from "react";
import { Check } from "../ui/svg/Check";

function ReservationDetails() {
  return (
    <div className="reservation-details-card-container shadow-light-400 ">
      <h1 className="heading-large-bold primary-0">
        Hotel / Property Name will be here
      </h1>
      <a href="" className="text-tertiary">
        Change your selection
      </a>

      <div className="reservation-details-container">
        <h1 className="ticket-headline-semibold">Reservation Details</h1>

        <div className="stay-dates-container">
          <p className="text-secondary footnote-medium mb-1">Stay Dates</p>
          <div className="stay-dates-wrapper">
            <p className="body-medium">August 14-16, 2023</p>
            <p className="body-medium">(2 nights)</p>
          </div>
        </div>

        <div className="selected-rooms-container">
          <p className="text-secondary footnote-medium mb-1">
            Selected Room(s)
          </p>
          <p className="callout-medium mb-1">1 Deluxe Garden Suite</p>

          <p className="footnote-medium mb-1">
            <span>
              <Check _color="#2EAE4E" />
            </span>
            Max of 2 adults
          </p>
          <p className="footnote-medium">
            <span>
              <Check _color="#2EAE4E" />
            </span>
            Free Breakfast
          </p>
        </div>
      </div>

      <div className="price-overview-container">
        <h1 className="ticket-headline-semibold">Price Overview</h1>

        <div className="total-price-wrapper body-medium">
          <p>Total Room Price</p>
          <p>PHP 6,000.00</p>
        </div>
        <p className="footnote-medium room-night">1 room x 2 nights</p>

        <div className="taxes-fee body-medium">
          <p>Taxes and Fees</p>
          <p>PHP 800.00</p>
        </div>

        <div className="galago-discount text-error body-medium">
          <p>GalaGO! Discount</p>
          <p>-PHP 1,000.00</p>
        </div>
      </div>

      <div className="hotel-total-price-wrapper">
        <h1 className="primary-0 heading-small-bold">Total Price</h1>
        <div className="hotel-total-price heading-large-bold">
          <p>PHP 5,800.00</p>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetails;
