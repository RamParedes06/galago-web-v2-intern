import "../../styles/footer.scss";
import { Link } from "react-router-dom";
import { FacebookIcon } from "./svg/FacebookIcon";
import { Instagram } from "./svg/Instagram";
import { LinkedIn } from "./svg/LinkedIn";
const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="d-flex justify-content-between w-100 align-items-start">
            <div className="left-col">
              <div className="cols">
                <h3>Company</h3>
                <Link
                  to="https://www.walktheplanet.com/"
                  style={{ textDecoration: "none" }}
                >
                  <p>About Us</p>
                </Link>
                <Link
                  to="/privacy-policy"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  <p>Privacy Policy</p>
                </Link>
              </div>
              <div className="cols">
                <h3>Support</h3>
                <Link
                  to="/help-center"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  <p>Help Center</p>
                </Link>
                <Link
                  to="/terms-conditions"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  <p>Terms and Conditions</p>
                </Link>
              </div>
              <div className="cols">
                <h3>Resources</h3>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  <p>Blogs</p>
                </Link>
                <Link
                  to="/promos"
                  onClick={scrollToTop}
                  style={{ textDecoration: "none" }}
                >
                  <p>Promos</p>
                </Link>
              </div>
            </div>
            <div className="right-col">
              <img
                src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/white_galago+1.png"
                alt="galago logo"
              />
              <div className="d-flex gap-2 align-items-center">
                <div className="logo-group">
                  <a href="https://www.facebook.com/galagonow">
                    <FacebookIcon
                      _color="transparent"
                      _width={24}
                      _height={24}
                    />
                  </a>
                  <a href="https://www.instagram.com/galagonow/?hl=en">
                    <Instagram _color="transparent" _width={24} _height={24} />
                  </a>
                  <a href="https://www.linkedin.com/company/walktheplanet/">
                    <LinkedIn _color="transparent" _width={24} _height={24} />
                  </a>
                </div>
                <p className="footnote-medium primary-10">
                  customersupport@GalaGo.com.ph
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright">
          © 2023 WalkThePlanet, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
