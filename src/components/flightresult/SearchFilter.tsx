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

const marks = [
  {
    value: 0,
    label: "00:00",
  },
  {
    value: 20,
    label: "6:30",
  },
  {
    value: 37,
    label: "12:30",
  },
  {
    value: 100,
    label: "6:30",
  },
];

function SearchFilter() {
  //!TIME SLIDER (to be changed)
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
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
              buttonClass="border-btn"
              buttonStyle={{
                fontSize: "10px",
                padding: "6px 18px",
                borderRadius: "12px",
              }}
            />
          </div>

          <div className="cabin-content">
            <div className="checkbox">
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox1"
                value="option1"
                label="Economy"
                inline
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox2"
                value="option2"
                label="Premium Economy"
                inline
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox2"
                value="option2"
                label="Business or First Class"
                inline
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
              buttonClass="default-btn"
              buttonStyle={{
                fontSize: "10px",
                width: "fit-content",
                borderRadius: "12px",
                padding: "6px 18px",
              }}
            />
          </div>
          <div className="aircraft-content">
            <div className="checkbox">
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox2"
                value="option2"
                label="Premium Economy"
                inline
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox2"
                value="option2"
                label="Business or First Class"
                inline
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
          {/* <div className="range-slider-container">
            <Slider
              getAriaLabel={() => ""}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
              marks={marks}
            />
          </div> */}
          <div className="time">
            <p className="text-grey">Arrival time</p>
            <p>00:00 - 12:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
