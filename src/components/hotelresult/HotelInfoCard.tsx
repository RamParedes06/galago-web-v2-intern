import React from "react";
import "../../styles/hotelresult.scss";
import hotel_img from "../../resources/hotelresults/hotel_info_card.png";
import ButtonComponent from "../ui/ButtonComponent";
import galago_picks from "../../resources/flightresults/galago_logo.png";
import { Link } from "react-router-dom";
import HotelPrice from "./HotelPrice";

const hotelInfoData = [
  {
    image: "",
    propertyName: "Property Name 1",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 2",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 3",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 4",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 5",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 6",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 7",
    description: "2 nights, July 24 - 26, Baguio City",
  },
  {
    image: "",
    propertyName: "Property Name 8",
    description: "2 nights, July 24 - 26, Baguio City",
  },
];
function HotelInfoCard() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {hotelInfoData.map((hotelInfo, index) => (
        <div className="hotel-card-wrapper">
          {index === 0 && (
            <div className="galago-picks body-semibold">
              <div className="galago-picks-logo">
                <img src={galago_picks} alt="" />
              </div>
              <p>Gally's Top Pick!</p>
            </div>
          )}
          <div className="hotel-info-card-container">
            <div className="hotel-card-img">
              <img src={hotel_img} alt="" />
            </div>

            <div className="hotel-info-card">
              <div className="hotel-info-property">
                <h1 className="ticket-large-medium">
                  {hotelInfo.propertyName}
                </h1>
                <p>2 nights, July 24 - 26, Baguio City</p>
                <div className="cancellation-tag">
                  <p className="footnote-medium">Free Cancellation</p>
                </div>
              </div>
              <div className="hotel-availability">
                <div className="hotel-stars">
                  <p>4.6</p>
                </div>
                <p className="mt-1">Total Price</p>
                <HotelPrice />
                <p className="text-secondary mb-3">Tax included</p>

                <Link to={"/hotel-profile"} onClick={scrollToTop}>
                  <ButtonComponent
                    buttonText="See Availability"
                    className="default-btn"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HotelInfoCard;
