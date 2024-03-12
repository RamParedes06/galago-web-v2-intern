import React, { useState } from "react";
import show_icon from "../../resources/price-summary-show.png";

function PriceSummary() {
  const [baseFare, showBaseFare] = useState(false);
  const [className, setClassName] = useState("");
  function handleShowBaseFare() {
    showBaseFare(!baseFare);
    setClassName(baseFare ? "" : "rotatedStyle");
    console.log(className);
  }
  return (
    <div className="price-summary-container">
      <div className="price-summary-header">
        <h1>Price Summary</h1>
      </div>

      <div className="price-summary-content">
        <div className="base-fare">
          <p>
            Total Base Fare
            <span>
              <img
                src={show_icon}
                alt="arrow icon"
                className={className}
                onClick={() => {
                  handleShowBaseFare();
                }}
              />
            </span>
          </p>
          <p>PHP 10,000.00</p>
        </div>

        <div className="passenger">
          <p>(1 Passenger)</p>
        </div>
        {baseFare ? (
          <div className="added-content text-secondary ">
            <p>Adult x 1</p>
            <p>PHP 10,000.00</p>
          </div>
        ) : null}

        <div className=" taxes-fees-container body-medium text-secondary mt-3">
          <p> Taxes and Fees</p>
          <p>PHP 5,000.00</p>
        </div>
      </div>

      <div className="total-price-summary">
        <p>Total Price</p>
        <p className="fw-medium">PHP 10,835.93</p>
      </div>
    </div>
  );
}

export default PriceSummary;
