import "../../styles/flightresult.scss";
import airasia from "../../resources/flightresults/air-asia.png";
import cebupacific from "../../resources/flightresults/cebu-pacific.png";
import arrow from "../../resources/flightresults/arrow.png";
//? Calling tags components
import { Cheapest, Fastest, Percentage } from "./Tags";
import * as Tags from "./Tags";
import ButtonComponent from "../ui/ButtonComponent";

const flightInfoData = [
  {
    tags: "",
    image: airasia,
    airline: "Air Asia",
    flightNum: "2P 2129",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 35min",
    price: "PHP 7,384",
  },
  {
    // tags:
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    // tags:
    image: airasia,
    airline: "Air Asia",
    flightNum: "2P 2129",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 35min",
    price: "PHP 7,384",
  },
  {
    // tags:
    image: airasia,
    airline: "Air Asia",
    flightNum: "2P 2129",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 35min",
    price: "PHP 7,384",
  },
  {
    // tags:
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    // tags:
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
];
function FlightInfoCard() {
  return (
    <div className="flight-info-card-container">
      {flightInfoData.map((flightInfo) => (
        <div className="flight-info-card">
          <div className="tags">
            <Percentage /> <Cheapest /> <Fastest />
          </div>

          <div className="info">
            {/* Airline Col  */}
            <div className="airline">
              <div className="airline-img">
                <img src={flightInfo.image} alt="" />
              </div>
              <p>{flightInfo.airline}</p>
            </div>

            {/* Flight No. Col  */}
            <div className="info-col">
              <p className="text-grey">Flight Number</p>
              <p>{flightInfo.flightNum}</p>
            </div>

            {/* From Date  */}
            <div className="info-col">
              <p className="text-grey">From</p>
              <p>{flightInfo.from}</p>
            </div>
            {/* Arrow Icon  */}
            <div className="arrow-icon">
              <img src={arrow} alt="" />
            </div>

            {/* To Date  */}
            <div className="info-col">
              <p className="text-grey">To</p>
              <p>{flightInfo.to}</p>
            </div>

            {/* Direct  */}
            <div className="info-col">
              <p className="text-grey">Direct</p>
              <p>{flightInfo.time}</p>
            </div>

            <div className="price-and-button">
              <h1>{flightInfo.price} / pax</h1>
              <ButtonComponent
                buttonText="SEE FLIGHT"
                buttonClass="default-btn"
                buttonStyle={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  maxWidth: "126px",
                  maxHeight: "40px",
                  fontSize: "12px",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightInfoCard;
