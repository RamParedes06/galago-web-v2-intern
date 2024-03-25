import React from "react";
import { GrayGalaGo } from "../ui/svg/GrayGalaGo";
import NavigationBarWhite from "../ui/NavigationBarWhite";
import FooterComponent from "../ui/FooterComponent";
import "../../styles/bookandtrip.scss";

const EmptyBookingsAndTrips = () => {
  return (
    <>
      <NavigationBarWhite />
      <div className="bookings-container">
        <h1 className="title-large-bold">Bookings and Trips</h1>
        <div className="empty-bookings-content">
          <GrayGalaGo _width={225} _height={159} />
          <div className="d-flex flex-column gap-1">
            <p className="heading-large-bold">No bookings and trips.... yet!</p>
            <p className="text-secondary callout-medium">
              Dust off your luggage, grab your passport, and start planning your
              next journey!
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default EmptyBookingsAndTrips;
