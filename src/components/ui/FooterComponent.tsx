import logo from "../../resources/GalaGO Logo 1.png";
import "../../styles/footer.scss";
const FooterComponent = () => {
  return (
    <div>
      <footer>
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
        <hr />
        <div id="copyright">
          © 2023 WalkThePlanet, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
