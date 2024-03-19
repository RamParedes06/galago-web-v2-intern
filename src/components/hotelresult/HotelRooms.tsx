import React from "react";

const HotelRooms = () => {
  return (
    <div>
      <h1>Standard Double Room</h1>

      <div className="room-card-container">
        <div className="room-amenities-card"></div>
        <div className="room-inclusions-col">
          <h1>Room Inclusions</h1>
          <p>Free cancellation Before Sep 12, 2024 (11:59 pm)</p>
          <p>Free Breakfast</p>
          <p>Book without credit card</p>
          <p> Express Check-in</p>
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
