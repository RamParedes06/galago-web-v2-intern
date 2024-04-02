import React, { useState } from "react";
import "../../styles/navigationbar.scss";
import { Link } from "react-router-dom";
import { DropdownButton } from "./svg/DropdownButton";

function NavigationBar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const toggleNavDropdown = () => {
    setShowNavDropdown((prev) => !prev);
  };
  return (
    <div className={color ? "nav-container nav-container-bg" : "nav-container"}>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/white_galago+1.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" onClick={scrollToTop} style={{ textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link
          to="/promos"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Promos</p>
        </Link>
        <Link
          to="/blogs"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Blogs</p>
        </Link>
        <Link
          to="https://www.walktheplanet.com"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>About Us</p>
        </Link>

        {/* <button className="shadow-sm rounded">Login</button> */}
        <div className="nav-info d-flex align-items-center gap-2">
          <div className="nav-profile">
            <img
              src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/NavigationBar+Assets/ProfilePicture.jpg"
              alt=""
              style={{ border: "2px solid #ffffff" }}
            />{" "}
          </div>
          <div
            className="nav-profile-info d-flex align-items-center gap-2 pointer"
            onClick={toggleNavDropdown}
          >
            <p>Christian Mae</p>
            <p>
              <DropdownButton _color="#FFFFFF" _height={7} _width={11} />
            </p>
          </div>
          {showNavDropdown && (
            <div className="nav-dropdown">
              <Link to="/bookings-and-trips" style={{ textDecoration: "none" }}>
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
  );
}

export default NavigationBar;
