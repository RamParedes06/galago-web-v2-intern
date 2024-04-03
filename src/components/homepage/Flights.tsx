import { Button, Container, Form } from "react-bootstrap";
import ButtonComponent from "../../components/ui/ButtonComponent";
import { SwitchArrow } from "../ui/svg/SwitchArrow";
import "../../styles/homepage.scss";
import "../../styles/button.scss";
import { Search } from "../ui/svg/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

function Flights() {
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  // adding a default value
  const [selectedOption, setSelectedOption] = useState<string>("one-way");

  const selectOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="tab-contents">
        <div className="trip-container  footnote-medium primary-0">
          <button
            className={`trip-option one-way ${
              selectedOption === "one-way" ? "selected" : ""
            }`}
            onClick={() => selectOption("one-way")}
          >
            One Way
          </button>
          <button
            className={`trip-option round-trip ${
              selectedOption === "round-trip" ? "selected" : ""
            }`}
            onClick={() => selectOption("round-trip")}
          >
            Round Trip
          </button>
          <button
            className={`trip-option multi-city ${
              selectedOption === "multi-city" ? "selected" : ""
            }`}
            onClick={() => selectOption("multi-city")}
          >
            Multi-City
          </button>
        </div>

        <div className="row-1 footnote-medium">
          <div className="from-col">
            <p>From</p>
            <Form.Control onKeyUp={()=>{
              
            }} type="text" placeholder="Manila" />
          </div>
          <div className="btn-switch">
            <SwitchArrow _color="#fff" />
          </div>
          <div className="to-col">
            <p>To</p>
            <Form.Control type="text" placeholder="Rome" />
          </div>
        </div>

        <div className="row-2 footnote-medium">
          <div className="departure-date">
            <p>Departure Date</p>
            <Form.Control type="date" placeholder="September 5, 2023" />
          </div>

          <div className="passengers">
            <p>Passengers</p>
            <Form.Select>
              <option value="val1">1 Adult - 0 Child</option>
              <option value="val2">1 Adult - 0 Child</option>
            </Form.Select>
          </div>

          <div className="cabin-class">
            <p>Cabin Class</p>
            <Form.Select>
              <option value="val1">Economy</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/flight-results"}>
            <Button className="search-btn">
              <span className="px-2">
                <Search />
              </span>
              SEARCH
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Flights;
