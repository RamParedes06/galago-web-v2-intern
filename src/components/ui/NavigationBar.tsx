import React, { useState } from "react";
import "../../styles/navigationbar.scss";
import logo from "../../resources/GalaGO Logo 1.png";
import { Link } from "react-router-dom";

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
  return (
    <div className={color ? "nav-container nav-container-bg" : "nav-container"}>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" />
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
          to="www.walktheplanet.com"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>About Us</p>
        </Link>
        <Link
          to="/favorites"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Favorites</p>
        </Link>
        <Link
          to="flight-results"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Flights</p>
        </Link>
        <Link
          to="/hotel-result"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Hotels</p>
        </Link>
        <Link
          to="/help-center"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Help Center</p>
        </Link>

        <Link
          to="/profile"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <p>Profile</p>
        </Link>

        <button className="shadow-sm rounded">Login</button>
      </div>
    </div>
  );
}

export default NavigationBar;
