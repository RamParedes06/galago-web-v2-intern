import React from "react";
import logo from "../../resources/promos/logo.png";
import { Container } from "react-bootstrap";
function FooterComponent() {
  return (
    <footer>
      <Container>
        <div className="footer">
          <div className="left-col">
            <div className="cols">
              <h3>Company</h3>
              <p>About Us</p>
              <p>Privacy Policy</p>
            </div>
            <div className="cols">
              <h3>Support</h3>
              <p>Help Center</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="cols">
              <h3>Resources</h3>
              <p>Blogs</p>
              <p>Promos</p>
            </div>
          </div>
          <div className="right-col">
            <img src={logo} alt={logo} />
          </div>
        </div>
        <Container className="footer-line">
          <hr />
        </Container>
        <div id="copyright">
          © 2023 WalkThePlanet, Inc. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default FooterComponent;
