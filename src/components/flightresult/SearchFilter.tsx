import ButtonComponent from "../ui/ButtonComponent";
import SliderComponent from "../ui/SliderComponent";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { RangeSlider } from "rsuite";
import { Slider } from "@mui/material";
import { useState } from "react";

//! function for Time Slider using MUI
function valuetext(value: number) {
  return `${value}`;
}

//! function for Time Slider using MUI
function departureValueText(departureValue: number) {
  return `${departureValue}`;
}

const arrivalMarks = [
  {
    value: 0,
    label: "00:00",
  },
  {
    value: 25,
    label: "6:00",
  },
  {
    value: 50,
    label: "12:00",
  },
  {
    value: 75,
    label: "18:00",
  },
  {
    value: 100,
    label: "24:00",
  },
];

const departureMarks = [
  {
    value: 0,
    label: "00:00",
  },
  {
    value: 25,
    label: "6:00",
  },
  {
    value: 50,
    label: "12:00",
  },
  {
    value: 75,
    label: "18:00",
  },
  {
    value: 100,
    label: "24:00",
  },
];

function SearchFilter() {
  // Cabin Checkbox Selection
  const [cabinCheckboxes, setCabinCheckboxes] = useState({
    economy: false,
    premiumEconomy: false,
    business: false,
  });

  // Select all Button
  const handleSelectAll = () => {
    setCabinCheckboxes({
      economy: true,
      premiumEconomy: true,
      business: true,
    });
  };

  // Aircraft Selection
  const [aircraftCheckboxes, setAircraftCheckboxes] = useState({
    narrowBody: true,
    wideBody: true,
  });

  // Unselect All Button
  const handleUnselectAll = () => {
    setAircraftCheckboxes({
      narrowBody: false,
      wideBody: false,
    });
  };

  // Function to handle checkbox change
  const handleCheckboxChangeAircraft = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    console.log("Checkbox name:", name);
    console.log("Checkbox checked:", checked);
    setAircraftCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleCheckboxChangeCabin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    console.log("Checkbox name:", name);
    console.log("Checkbox checked:", checked);
    setCabinCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  //!TIME SLIDER (to be changed)
  const [departureValue, setDepartureValue] = useState<number[]>([24, 37]);
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleDepartureChange = (event: Event, newValue: number | number[]) => {
    setDepartureValue(newValue as number[]);
  };

  const handleArrivalChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="search-filter-container">
      <div className="search-header">
        <p>Search Filters</p>
      </div>

      <div className="search-content">
        <div className="duration-container">
          <h1>Duration</h1>
          <p className="text-grey">Total travel time</p>
          <p>Under 24 hours</p>
          <div className="slider-container">
            <SliderComponent min={1} max={24} />
          </div>
          <p className="text-grey">Layover</p>
          <p>Under 11 hours</p>
          <div className="slider-container">
            <SliderComponent min={1} max={11} />
          </div>
        </div>
        <hr />
        <div className="cabin-container">
          <div className="cabin-header">
            <h1>Cabin</h1>
            <ButtonComponent
              buttonText="Select All"
              className="border-btn"
              style={{
                fontSize: "10px",
                padding: "6px 18px",
                borderRadius: "12px",
              }}
              onClick={handleSelectAll}
            />
          </div>

          <div className="cabin-content">
            <div className="checkbox">
              <MDBCheckbox
                name="economy"
                id="economyCheckbox"
                value="option1"
                label="Economy"
                inline
                checked={cabinCheckboxes.economy}
                onChange={handleCheckboxChangeCabin}
              />
              <MDBCheckbox
                name="premiumEconomy"
                id="premiumEconomyCheckbox"
                value="option2"
                label="Premium Economy"
                inline
                checked={cabinCheckboxes.premiumEconomy}
                onChange={handleCheckboxChangeCabin}
              />
              <MDBCheckbox
                name="business"
                id="businessCheckbox"
                value="option3"
                label="Business or First Class"
                inline
                checked={cabinCheckboxes.business}
                onChange={handleCheckboxChangeCabin}
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="aircraft-container">
          <div className="aircraft-header">
            <h1>Aircraft Type</h1>
            <ButtonComponent
              buttonText="Unselect All"
              className="default-btn"
              style={{
                fontSize: "10px",
                width: "fit-content",
                borderRadius: "12px",
                padding: "6px 18px",
              }}
              onClick={handleUnselectAll}
            />
          </div>
          <div className="aircraft-content">
            <div className="checkbox">
              <MDBCheckbox
                name="narrowBody"
                id="narrowBodyCheckbox"
                value="option1"
                label="Narrow Body"
                inline
                checked={aircraftCheckboxes.narrowBody}
                onChange={handleCheckboxChangeAircraft}
              />
              <MDBCheckbox
                name="wideBody"
                id="wideBodyCheckbox"
                value="option2"
                label="Wide Body"
                inline
                checked={aircraftCheckboxes.wideBody}
                onChange={handleCheckboxChangeAircraft}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="time-container">
          <h1>Time (Local Time)</h1>
          <div className="time">
            <p className="text-grey">Departure time</p>
            <p>00:00 - 12:30</p>
          </div>

          {/* Progress */}
          <div className="range-slider-container">
            <Slider
              getAriaLabel={() => ""}
              value={departureValue}
              onChange={handleDepartureChange}
              valueLabelDisplay="auto"
              getAriaValueText={departureValueText}
              disableSwap
              marks={departureMarks}
            />
          </div>
          <div className="time">
            <p className="text-grey">Arrival time</p>
            <p>00:00 - 12:30</p>
          </div>
          {/* Progress */}
          <div className="range-slider-container">
            <Slider
              getAriaLabel={() => ""}
              value={value}
              onChange={handleArrivalChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
              marks={arrivalMarks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
