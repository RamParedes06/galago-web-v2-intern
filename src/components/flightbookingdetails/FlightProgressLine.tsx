import React from "react";
import "../../styles/selectedflight.scss";
function FlightProgressLine() {
  return (
    <div className="progress-line-container">
      <div className="element-line-wrapper">
        <div className="element">
          <p>Flight Selection</p>
        </div>
        <div className="line"></div>
      </div>
      <div className="element-line-wrapper">
        <div className="element">
          <p>Passenger Details</p>
        </div>
        <div className="line"></div>
      </div>
      <div className="element-line-wrapper">
        <div className="element">
          <p>Payment</p>
        </div>
        <div className="line"></div>
      </div>
      <div className="element">
        <p>Confirmation</p>
      </div>
    </div>
  );
}

export default FlightProgressLine;
