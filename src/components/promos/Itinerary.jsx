import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/promo.scss";
import check_icon from "../../resources/promos/check_icon.png";

const itineraryData = [
  {
    day: "Day 1",
    title: "Manila - Puerto Princesa El Nido",
    desc: "Depart NAIA Terminal 3 Bound to Puerto Princesa. Arrive Puerto Princesa Airport& transfer to El Nido based on shared. The rest of the day, free time on your own. Overnight at hotel.",
  },
  {
    day: "Day 2",
    title: "El Nido Breakfast",
    desc: "Breakfast. Proceed to island hopping , visiting Big Lagoon, Shimizu island, Seven Commando Beach, Payong-Payong beach & Secret lagoon with lunch. Transfer back to hotel. Overnight at hotel.",
  },
  {
    day: "Day 3",
    title: "El Nido Breakfast",
    desc: "Breakfast. Free time own leisure or join optional tour. Overnight at hotel.",
  },
  {
    day: "Day 3",
    title: "El Nido - Puerto Princesa El Nido - Manila (B)",
    desc: "Breakfast. Free time own leisure or join optional tour. Overnight at hotel.",
  },
];

const remarksData = [
  {
    remark:
      "PROMO RATE is valid for the first 50 passengers, a surcharge of PHP 1,000 / person will be added to the rate in escape of blackings.",
  },
  {
    remark:
      "Thursday and Friday departure: Additional PHP 1,000 / per pax surcharge.",
  },
  {
    remark:
      "Peak season surcharge of PHP 2,000 per room / per night on April 06 - 10, April 30 - May 02, 2023.",
  },
  {
    remark:
      "A non-refundable deposit of PHP 2,000 per person will be collected to guarantee the room and seats . Full payment after 48 hours upon confirmation.",
  },
  {
    remark:
      "Itinerary, Hotel and Meals are subject to change depending on the local traffic, weather condition or situation",
  },
  {
    remark:
      "A surcharge of PHP 1,000 per person will be applicable for holders of foreign passport.",
  },
  {
    remark: "Seats and Rooms are subject to space availability upon booking",
  },
];

const packageInclusions = [
  {
    included:
      "Round trip airfare via Royal Air Philippines, Airline Taxes, and Terminal fee.",
  },
  {
    included:
      "3 or 4 nights hotel accommodation based on quad/twin/triple with daily hotel breakfast.",
  },
  {
    included: "Roundtrip transfer inclusive of environmental fee.",
  },
  {
    included: `FREE Welcome lunch at Seabreeze or Henann Regency
            (passenger have to go their on their own). `,
  },
];

const packageExclusions = [
  {
    excluded: `Free Welcome lunch at Seabreeze or Henann Regency 
        (passenger have to go their on their own).`,
  },
];

const flightDetails = [
  {
    flight1: "5J 635 MANILA PUERTO PRINCESA 0545-0720",
    flight2: "5J 646 PUERTO PRINCESA MANILA 3200-2235",
    additional:
      "PHP 1,000 / pax departing April 07, 08, 27, 29, June 08, 09, 2023",
  },
];

function Itinerary() {
  return (
    <Container className="itinerary-container">
      <div className="itinerary">
        <h1>Itinerary</h1>
        <div className="itinerary-details">
          {itineraryData.map((itinerary) => (
            <div>
              <p className="itinerary-circle">
                <span>{itinerary.day} - </span> {itinerary.title}
              </p>

              <p className="itinerary-line">{itinerary.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="remarks">
        <h1>Remarks</h1>
        <div className="remarks-details">
          {remarksData.map((remarks) => (
            <div className="check-icon">
              <img src={check_icon} alt="" /> <p>{remarks.remark}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="package-inclusions">
        <h1>Included in Package</h1>
        <div className="package-inclusions-details">
          {packageInclusions.map((inclusions) => (
            <div className="check-icon">
              <img src={check_icon} alt="" /> <p>{inclusions.included}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="package-exclusions">
        <h1>Excluded in Package</h1>
        <div className="package-exclusions">
          {packageExclusions.map((exclusions) => (
            <div className="check-icon">
              <img src={check_icon} alt="" /> <p>{exclusions.excluded}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flight-details">
        <h1>Flight Details</h1>
        <div className="flight-details">
          {flightDetails.map((flight) => (
            <>
              <p className="flight-circle">{flight.flight1}</p>
              <p className="flight-circle"> {flight.flight2}</p>
              <p className="additional"> ADDITIONAL: {flight.additional}</p>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Itinerary;
