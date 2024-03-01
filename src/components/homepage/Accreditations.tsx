import { Container } from "react-bootstrap";
import "../../styles/accreditations.scss";
import logo1 from "../../resources/homepage/logo_1.png";
import logo2 from "../../resources/homepage/logo_2.png";
import logo3 from "../../resources/homepage/logo_3.png";
import logo4 from "../../resources/homepage/logo_4.png";

function Accreditations() {
  return (
    <Container className="accreditations-container">
      <h1>Accreditations and Affiliations</h1>

      <div className="accreditations">
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <div className="logo">
          <img src={logo2} alt="" />
        </div>
        <div className="logo3-img">
          <img src={logo3} alt="" />
        </div>
        <div className="logo">
          <img src={logo4} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Accreditations;
