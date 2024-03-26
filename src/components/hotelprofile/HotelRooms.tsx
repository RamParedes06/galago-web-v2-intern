import HotelPrice from "../hotelresult/HotelPrice";
import { Check } from "../ui/svg/Check";
import "../../styles/hotelrooms.scss";
import ButtonComponent from "../ui/ButtonComponent";
import { useState } from "react";

type HotelRoomTypes = {
  setReservedRoom: (arg: { [index: string]: any }) => void;
};

const HotelRooms = ({ setReservedRoom }: HotelRoomTypes) => {
  const hotelRoomsData = [
    {
      roomName: "Standard Double Room",
      roomInclusions: [
        "Free cancellation Before September 12, 2023 (11:59pm)",
        "Free Breakfast",
        " Express Check-in",
      ],
      pricePerNight: "PHP 2,500.00",
    },
    {
      roomName: "Deluxe Twin Room",
      roomInclusions: [
        "Free cancellation Before September 12, 2023 (11:59pm)",
        "Free Breakfast",
      ],
      pricePerNight: "PHP 2,600.00",
    },
    {
      roomName: "Executive Suite",
      roomInclusions: [
        "Free cancellation Before September 12, 2023 (11:59pm)",
        "Free Breakfast",
        "Book without credit card",
      ],
      pricePerNight: "PHP 2,700.00",
    },
  ];

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const handleRoomSelect = (roomName: string) => {
    setSelectedRoom(roomName);
  };

  return (
    <>
      {hotelRoomsData.map((hotelRooms, index) => (
        <div>
          <h1 className="ticket-large-semibold mt-5">{hotelRooms.roomName}</h1>
          <div className="hotel-rooms-container">
            <div className="room-inclusions-col">
              <h1 className="heading-small-bold">Room Inclusions</h1>

              {hotelRooms.roomInclusions.map((inclusion, i) => (
                <p key={i}>
                  <span>
                    <Check _width={24} _height={24} _color="#2EAE4E" />
                  </span>
                  {inclusion}
                </p>
              ))}
            </div>

            <div className="hotel-rooms-col2">
              <div className="empty-col"></div>

              <div className="price-per-night-container">
                <div className="price-per-night1">
                  <h1 className="heading-small-bold">Price per night</h1>
                </div>
                <div className="price-per-night2">
                  <HotelPrice
                    _hotelPrice={hotelRoomsData[index].pricePerNight}
                  />
                  <p className="footnote-medium text-secondary text-align-right">
                    PHP 0,000.00 with Taxes and Fees
                  </p>

                  <ButtonComponent
                    buttonText="Select Room"
                    className="btn-light-blue"
                    onClick={() => {
                      setReservedRoom(hotelRooms);
                      handleRoomSelect(hotelRooms.roomName);
                    }}
                    // onClick={() => handleRoomSelect(hotelRooms.roomName)}
                    // disabled={selectedRoom !== hotelRooms.roomName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelRooms;
