import React from "react";
import ButtonComponent from "../ui/ButtonComponent";
import "../../styles/hotelprofile.scss";
import { Link } from "react-router-dom";
type HotelRoomTypes = {
  reservedRoom: { [index: string]: any };
};

const SelectedHotel = ({ reservedRoom }: HotelRoomTypes) => {
  console.log(reservedRoom);
  return (
    <div className="selected-hotel-container shadow-light-400">
      <div className="selected-hotel-left-col">
        <h1 className="ticket-large-semibold primary-0">
          PHP {reservedRoom.TotalFare} total
        </h1>
        <p className="body-medium-new ">
          PHP {reservedRoom.TotalTax} with taxes and fees
        </p>
        <p className="body-medium-new text-secondary ">
          Price might change. You'll see the final price on the next page.
        </p>
      </div>

      <div className="selected-hotel-right-col">
        <Link to={"/hotel-booking-details"}>
          <div className="reserve-hotel-btn">
            <ButtonComponent
              buttonText="Reserve 1 Room(s)"
              className="default-btn"
              style={{ height: "62px", width: "218px" }}
            />
          </div>
        </Link>
        <p className="body-medium-new text-secondary">
          Please select (1) more room to proceed with the booking.
        </p>
      </div>
    </div>
  );
};

export default SelectedHotel;
