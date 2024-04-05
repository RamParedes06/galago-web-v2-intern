import { Button, Container, Form } from "react-bootstrap";
import ButtonComponent from "../../components/ui/ButtonComponent";
import { SwitchArrow } from "../ui/svg/SwitchArrow";
import "../../styles/homepage.scss";
import "../../styles/button.scss";
import { Search } from "../ui/svg/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapBorder } from "../ui/svg/MapBorder";
import InputText from "../ui/InputText";
import InputSelect from "../ui/InputSelect";

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
            <InputText
              id={"from-txt"}
              label={"From"}
              onKeyUp={() => {}}
              placeholder={"Country, City, or Airport"}
              icon={<MapBorder _color="#d9d9d9" _width={16} _height={16} />}
            />
          </div>
          <div className="btn-switch">
            <SwitchArrow _color="#fff" />
          </div>
          <div className="to-col">
            <InputText
              id={"to-txt"}
              label={"To"}
              placeholder={"Country, City, or Airport"}
              icon={<MapBorder _color="#d9d9d9" _width={16} _height={16} />}
            />
            <div className="location-svg">
              {/* <Map _color="#d9d9d9" _width={16} _height={16} /> */}
            </div>
          </div>
        </div>

        <div className="row-2 footnote-medium">
          <div className="departure-date">
            {/* <input type="date" name="" id="" /> */}
            <p>Departure Date</p>
            <Form.Control type="date" placeholder="September 5, 2023" />
          </div>

          <div className="passengers">
            <p>Passengers</p>
            <Form.Select>
              <option value="val1">1 Adult - 0 Child - 0 Infant</option>
              <option value="val2">1 Adult - 0 Child</option>
            </Form.Select>
          </div>

          <div className="cabin-class">
            <InputSelect
              id="to-txt"
              label="Cabin Class"
              // icon={<MapBorder _color="#d9d9d9" _width={16} _height={16} />}
              placeholder="Economy"
              options={[
                { value: "option1", label: "Premium Economy" },
                { value: "option2", label: "Business Class" },
                { value: "option3", label: "First Class" },
              ]}
            />
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
