import { Check } from "../ui/svg/Check";
import "../../styles/hotelrooms.scss";
import ButtonComponent from "../ui/ButtonComponent";
import { useState } from "react";
import { Info } from "../ui/svg/Info";

type HotelRoomTypes = {
  setReservedRoom: (arg: { [index: string]: any }) => void;
  handleShowModal: (isOpen: boolean) => void;
  rooms: any[];
};

const HotelRooms = ({
  rooms,
  setReservedRoom,
  handleShowModal,
}: HotelRoomTypes) => {
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
      {rooms?.map((room, index) => (
        <div key={index}>
          <h1 className="ticket-large-semibold mt-5">{room.Name}</h1>
          <div className="hotel-rooms-container">
            <div className="room-inclusions-col">
              <h1 className="heading-small-bold">Room Inclusions</h1>

              {/* {hotelRooms.roomInclusions.map((inclusion, i) => ( */}
              {/* <p key={i}> */}
              <p>
                <span>
                  <Check _width={24} _height={24} _color="#2EAE4E" />
                </span>
                {/* {inclusion} */}
                {room.Inclusion}
              </p>
              {/* ))} */}
            </div>

            <div className="hotel-rooms-col2">
              <div className="empty-col"></div>

              <div className="price-per-night-container">
                <div className="price-per-night1">
                  <h1 className="heading-small-bold">Price per night</h1>
                </div>
                <div className="price-per-night2">
                  <div className="hotel-price d-flex">
                    <p className="b-semibold-new">
                      PHP <span>{room.TotalFare}</span>{" "}
                    </p>
                    <div className="hotel-discount">
                      <p>17% OFF</p>
                    </div>{" "}
                    <Info _width={20} _height={20} _color="#016e7f" />
                  </div>
                  <p className="footnote-medium text-secondary text-align-right">
                    PHP <span>{room.TotalTax} </span> with Taxes and Fees
                  </p>

                  <ButtonComponent
                    buttonText="Select Room"
                    className="btn-light-blue"
                    onClick={() => {
                      setReservedRoom(room);
                      handleRoomSelect(room.Name);
                      handleShowModal(true);
                    }}
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
