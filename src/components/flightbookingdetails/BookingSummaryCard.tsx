import React from "react";
import "../../styles/flightbookingdetails.scss";
import "../../styles/bookingsummary.scss";
function BookingSummaryCard({ showAlternateContent }: any) {
  return (
    <>
      {" "}
      <div className="booking-summary-card">
        <div className="departure-price-wrapper">
          {showAlternateContent ? (
            <div>
              {" "}
              <p className="callout-medium mb-3">Booking Summary</p>
              <h4 className="ticket-large-semibold">Manila - Rome</h4>
              <p>Ninoy Aquino International - Rome Flumicino Airport</p>
              <p>Aug 31, 2023 - Sep 01, 2023</p>
              <p className="callout-regular primary-0 mt-3">Departure</p>
            </div>
          ) : (
            <div>
              <p className="callout-medium primary-0">Departure</p>

              <h4 className="ticket-large-semibold">MNL - CEB</h4>
              <p className="callout-medium text-secondary">
                Aug 31, 2023 - Sep 01, 2023
              </p>
            </div>
          )}
          <p className="callout-regular mt-2">
            Philippines Air Asia{" "}
            <span className="text-secondary">Z2777 - 320</span>
          </p>

          <div className="time-location-container mt-3">
            <div className="time-location">
              <p className="fw-bold">15:05</p>
              <p className="text-grey">MNL</p>
            </div>

            <div className="hours-direct">
              <p className="text-grey">3h 40m</p>
              <div className="hours-direct-line"></div>
              <p className="text-grey">Direct</p>
            </div>

            <div className="time-location">
              <p className="fw-bold">16:30</p>
              <p className="text-grey">CEB</p>
            </div>
          </div>
        </div>

        {showAlternateContent ? (
          <div className="booking-summary-alternate">
            <div className="paid-today-container">
              <div className="paid-today">
                <p className="body-medium">Paid Today</p>
                <p className="p-price-overview footnote-medium primary-0">
                  View price overview
                </p>
              </div>
              <div className="paid-today-price heading-small-medium">
                PHP 15,000.00
              </div>
            </div>

            <div className="booking-reference-container">
              <p className="body-medium">Booking Reference Number</p>
              <p className="heading-small-medium primary-0">ABCD 1234</p>
            </div>
          </div>
        ) : (
          <>
            <div className="price-overview-container">
              <p className="primary-0 callout-medium">Price Overview</p>
              <div className="base-fare">
                <p>Total Base Fare</p>
                <p>PHP 10,000.00</p>
              </div>

              <div className="taxes callout-regular text-secondary">
                <p>Taxes and Fees</p>
                <p>PHP 5,000.00</p>
              </div>
            </div>

            <div className="total-price-wrapper">
              <p className="callout-regular">Total Price</p>
              <p className="ticket-large-semibold">PHP 15,000.00</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BookingSummaryCard;
