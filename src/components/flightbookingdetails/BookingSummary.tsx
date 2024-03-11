import React from "react";

function BookingSummary() {
  return (
    <div className="booking-summary-container">
      <div className="booking-summary-header">
        <h1>Booking Summary</h1>
      </div>

      <div className="booking-summary-content">
        <h4>
          MNL - FCO{" "}
          <span className="callout-medium text-secondary">1h 35m</span>
        </h4>
        <p className="footnote-medium text-secondary">
          Aug 31, 2023 • 20:45 - Sep 01, 2023 • 12:05
        </p>
      </div>

      <div className="total-price-booking-summary">
        <p>Total Price</p>
        <p className="fw-medium">PHP 10,835.93</p>
      </div>
    </div>
  );
}

export default BookingSummary;
