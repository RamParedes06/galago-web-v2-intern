import "../../styles/flightresult.scss";
import airasia from "../../resources/flightresults/air-asia.png";
import cebupacific from "../../resources/flightresults/cebu-pacific.png";
import arrow from "../../resources/flightresults/arrow.png";
import ButtonComponent from "../ui/ButtonComponent";

import axios from "axios";
import ApiRoute from "../../apiRoutes";

//? Calling tags components
import { Cheapest, Fastest, Percentage } from "./Tags";
import { useEffect, useState } from "react";
import FlightModal from "./FlightModal";

const flightInfoData = [
  {
    tags: ["percentage", "cheapest", "fastest"],
    image: airasia,
    airline: "Air Asia",
    flightNum: "2P 2129",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 35min",
    price: "PHP 7,384",
  },
  {
    tags: ["fastest"],
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    tags: ["percentage", "fastest"],
    image: airasia,
    airline: "Air Asia",
    flightNum: "2P 2129",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 35min",
    price: "PHP 7,384",
  },
  {
    tags: ["percentage"],
    image: airasia,
    airline: "Air Asia",
    flightNum: "2P 2129",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 35min",
    price: "PHP 7,384",
  },
  {
    tags: ["percentage"],
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    tags: ["percentage", "cheapest", "fastest"],
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    tags: ["percentage", "cheapest", "fastest"],
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    tags: ["percentage", "cheapest", "fastest"],
    image: cebupacific,
    airline: "Cebu Pacific",
    flightNum: "2P 2869",
    from: "03:40 MNL",
    to: "05:25 CEB",
    time: "1h 22min",
    price: "PHP 6,994",
  },
  {
    tags: ["percentage", "cheapest", "fastest"],
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
  const [modalShow, setModalShow] = useState(false);

  const [airports, setAirports] = useState<any>();
  
  useEffect(() => {
    axios.post(ApiRoute.searchOneWayFlights,{
      departureDate: '2024/05/01',
      originCode: 'MNL',
      destinationCode: 'DVO',
      passengers: {
        adults: 1
      }
    }).then((response)=>{
      setAirports(response.data.mystifly)
      console.log(airports)
    })
  },[])



  return (
    <div className="flight-info-card-container">
      {flightInfoData.map((flightInfo) => (
        <div className="flight-info-card">
          <div className="tags">
            {flightInfo.tags?.includes("percentage") && <Percentage />}
            {flightInfo.tags?.includes("cheapest") && <Cheapest />}
            {flightInfo.tags?.includes("fastest") && <Fastest />}
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
                className="default-btn"
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  maxWidth: "126px",
                  maxHeight: "40px",
                  fontSize: "12px",
                }}
                onClick={() => setModalShow(true)}
              />
            </div>
          </div>
        </div>
      ))}
      <FlightModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default FlightInfoCard;
