import "../../styles/navigationbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GalaGoTeal } from "./svg/GalaGoTeal";
import { DropdownButton } from "./svg/DropdownButton";

const NavigationBarWhite = () => {
  const [showNavDropdown, setShowNavDropdown] = useState(false);

  const toggleNavDropdown = () => {
    setShowNavDropdown(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="white-nav">
        <div className="nav-content d-flex align-items-center justify-content-between">
          <div>
            <Link to="/" onClick={scrollToTop}>
              <GalaGoTeal _height={100} />
            </Link>
          </div>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex gap-4">
              <Link
                to="/"
                className="main-links"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/"
                className="main-links"
                style={{ textDecoration: "none" }}
              >
                Blogs
              </Link>
              <Link
                to="/promos"
                className="main-links"
                style={{ textDecoration: "none" }}
              >
                Promos
              </Link>
              <Link
                to="/"
                className="main-links"
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
            </div>
            <div className="nav-info-right d-flex align-items-center gap-2">
              <div className="nav-profile">
                <img
                  src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/NavigationBar+Assets/ProfilePicture.jpg"
                  alt=""
                />{" "}
              </div>
              <div
                className="nav-profile-info d-flex align-items-center gap-2 pointer"
                onClick={toggleNavDropdown}
              >
                <p>Christian Mae</p>
                <p>
                  <DropdownButton _color="#33333" _height={7} _width={11} />
                </p>
              </div>
              {showNavDropdown && (
                <div className="nav-dropdown">
                  <Link
                    to="/bookings-and-trips"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="nav-dropdown-links">Bookings and Trips</p>
                  </Link>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <p className="nav-dropdown-links">Account</p>
                  </Link>
                  <Link to="/favorites-page" style={{ textDecoration: "none" }}>
                    <p className="nav-dropdown-links">Favorites</p>
                  </Link>
                  <hr />
                  <Link to="/help-center" style={{ textDecoration: "none" }}>
                    <p className="nav-dropdown-links">Help Center</p>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-dropdown-links">Log Out</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBarWhite;
