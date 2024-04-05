import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SwitchArrow } from "../ui/svg/SwitchArrow";
import { Search } from "../ui/svg/Search";
import { Link } from "react-router-dom";
import InputText from "../ui/InputText";
import { MapBorder } from "../ui/svg/MapBorder";

function Hotels() {
  const [selectedCheckIn, setSelectedCheckIn] = useState("");
  const [selectedCheckOut, setSelectedCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleSelectCheckIn = (event: any) => {
    setSelectedCheckIn(event.target.value);
  };
  const handleSelectCheckOut = (event: any) => {
    setSelectedCheckOut(event.target.value);
  };

  const handleSelectRoom = (event: any) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <div className="home-hotels-container">
      {" "}
      <div className="hotels-row-1 footnote-medium">
        <div className="hotels-col">
          <InputText
            id={"hotel-name-txt"}
            label={"Destination or Hotel Name"}
            placeholder={"Country, City, or Airport"}
            icon={<MapBorder _color="#d9d9d9" _width={16} _height={16} />}
          />
        </div>
        <div className="hotels-col">
          <p>Check-in Date</p>
          <Form.Control type="date" placeholder="Apr 02, 2024" />
        </div>
        <div className="hotels-col">
          <p>Check-out Date</p>
          <Form.Control type="date" placeholder="Apr 3, 2024" />
        </div>
        <div className="hotels-col">
          <p>Guests and Rooms</p>
          <Form.Select
            onChange={handleSelectRoom}
            className={selectedRoom ? "border-primary" : ""}
          >
            <option value="val1">1 Adult - 1 Child, 1 Room</option>
            <option value="val2">1 Adult - 2 Child, 2 Rooms</option>
          </Form.Select>
        </div>
      </div>
      <div className="hotels-search-btn">
        <Link to={"/hotel-result"}>
          <Button className="search-btn">
            <p>
              {" "}
              <span className="px-2">
                <Search />
              </span>
              SEARCH
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hotels;
