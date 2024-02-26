import React, { useState } from "react";
import "../../styles/navigationbar.scss";
import logo from '../../resources/GalaGO Logo 1.png'

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

  return (
    <div className={color ? "nav-container nav-container-bg" : "nav-container"}>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <p>Home</p>
        <p>Promos</p>
        <p>Blogs</p>
        <p>About Us</p>
        <button className="shadow-sm rounded">Login</button>
      </div>
    </div>
  );
}

export default NavigationBar;
