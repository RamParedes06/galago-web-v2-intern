import ButtonComponent from "../ui/ButtonComponent";
import SliderComponent from "../ui/SliderComponent";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { Slider, Box } from "@mui/material";
import { useState } from "react";
import CheckboxGroup from "../ui/CheckboxGroup";
import star_icon from "../../resources/hotelresults/star_rating.png";
import { Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/searchfilter.scss";
import RangeSliderComponent from "../ui/RangeSliderComponent";

// Reference: https://mui.com/material-ui/react-slider/
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

function SearchFilter({ showHotelContent }: any) {
  // FlightResultPage Checkboxes
  // const cabin = [
  //   { label: "Economy", value: "Opt1" },
  //   { label: "Premium Economy", value: "Opt2" },
  //   { label: "Business or First Class", value: "Opt3" },
  // ];
  // const airCraftType = [
  //   { label: "Narrow Body", value: "Opt1" },
  //   { label: "Wide Body", value: "Opt2" },
  // ];
  // HotelResultPage Checkboxes
  const propertyType = [
    { label: "Hotel", value: "Opt1" },
    { label: "Homestay", value: "Opt2" },
    { label: "Serviced Apartment", value: "Opt3" },
  ];
  const hotelFacilities = [
    { label: "24-hour Front Desk", value: "Opt1" },
    { label: "Airport Transfer", value: "Opt2" },
    { label: "Charging Station", value: "Opt3" },
  ];
  const amenities = [
    { label: "Air Conditioning", value: "Opt1" },
    { label: "Bathtub", value: "Opt2" },
    { label: "Balcony or Terrace", value: "Opt3" },
    { label: "Cribs Available", value: "Opt4" },
    { label: "Internet", value: "Opt5" },
  ];
  const bedPreferences = [
    { label: "Single Bed", value: "Opt1" },
    { label: "2 Beds", value: "Opt2" },
    { label: "3 Beds", value: "Opt3" },
  ];

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

  const [value2, setValue2] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue2(newValue as number[]);
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

      {!showHotelContent ? (
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
              {/* <Slider
                getAriaLabel={() => ""}
                value={departureValue}
                onChange={handleDepartureChange}
                valueLabelDisplay="auto"
                getAriaValueText={departureValueText}
                disableSwap
                marks={departureMarks}
              /> */}
              <div className="slider-container">
                <SliderComponent min={1} max={11} />
              </div>
            </div>
            <div className="time">
              <p className="text-grey">Arrival time</p>
              <p>00:00 - 12:30</p>
            </div>
            {/* Progress */}
            <div className="range-slider-container">
              {/* <Slider
                getAriaLabel={() => ""}
                value={value}
                onChange={handleArrivalChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                marks={arrivalMarks}
              /> */}
              <div className="slider-container">
                <SliderComponent min={1} max={11} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="search-content">
          <div className="price-range-container">
            <h1 className="ticket-large-semibold">Price Range</h1>
            <div className="slider-container my-4">
              <RangeSliderComponent />
            </div>

            <div className="price-range-btns d-flex justify-content-between">
              <Button className="price-range-btn footnote-medium">
                Minimum <br />
                <span className="text-primary0">PHP 500.00</span>
              </Button>
              <Button className="price-range-btn footnote-medium">
                Maximum <br />
                <span className="text-primary0">PHP 20,000.00</span>
              </Button>
            </div>
          </div>
          <hr />

          <div className="star-rating-container">
            <h1 className="ticket-large-semibold">Star Rating</h1>
            <div className="ratings-container mt-3">
              <div className="rating">
                <p className="callout-medium">1</p>
                <img src={star_icon} alt="star rating" />
              </div>
              <div className="rating">
                <p className="callout-medium">2</p>
                <img src={star_icon} alt="star rating" />
              </div>
              <div className="rating">
                <p className="callout-medium">3</p>
                <img src={star_icon} alt="star rating" />
              </div>
              <div className="rating">
                <p className="callout-medium">4</p>
                <img src={star_icon} alt="star rating" />
              </div>
              <div className="rating">
                <p className="callout-medium">5</p>
                <img src={star_icon} alt="star rating" />
              </div>
            </div>
          </div>

          <hr />
          <div className="property-type-container">
            <h1 className="ticket-large-semibold">Property Type</h1>

            <div className="property-type-content">
              <div className="checkbox">
                <CheckboxGroup name="property" options={propertyType} />
              </div>
              <a
                href="http://localhost:3000/#/hotel-result"
                className=" primary-0 footnote-medium"
              >
                Show all property types
              </a>
            </div>
          </div>
          <hr />

          <div className="hotel-facilities-container">
            <h1 className="ticket-large-semibold">
              Hotel Facilities and Services
            </h1>
            <div className="checkbox">
              <CheckboxGroup name="hotel" options={hotelFacilities} />
            </div>
            <a
              href="http://localhost:3000/#/hotel-result"
              className=" primary-0 footnote-medium"
            >
              Show all hotel facilities and services
            </a>
          </div>
          <hr />

          <div className="amenities-container">
            <h1 className="ticket-large-semibold">Amenities</h1>
            <div className="checkbox">
              <CheckboxGroup name="amenities" options={amenities} />
            </div>
            <a
              href="http://localhost:3000/#/hotel-result"
              className=" primary-0 footnote-medium"
            >
              Show all amenities
            </a>
          </div>
          <hr />

          <div className="bed-preferences-container">
            <h1 className="ticket-large-semibold">Bed Preferences</h1>
            <div className="checkbox">
              <CheckboxGroup name="bedPreferences" options={bedPreferences} />
            </div>
            <a
              href="http://localhost:3000/#/hotel-result"
              className="primary-0 footnote-medium"
            >
              Show all bed preferences
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
