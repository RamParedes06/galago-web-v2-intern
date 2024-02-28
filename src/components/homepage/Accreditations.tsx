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
        <img src={logo1} alt="" />

        <img src={logo2} alt="" className="logo2-img" />
        <div className="logo3-img">
          <img src={logo3} alt="" />
        </div>
        <img src={logo4} alt="" className="logo4-img" />
      </div>
    </Container>
  );
}

export default Accreditations;
