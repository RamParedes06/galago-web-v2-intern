import { Container, Form } from "react-bootstrap";
import ButtonComponent from "../../components/ui/ButtonComponent";
import { SwitchArrow } from "../ui/svg/SwitchArrow";
import "../../styles/homepage.scss";
import "../../styles/button.scss";

function Flights() {
  return (
    <Container>
      <div className="tab-contents">
        <div className="trip-container">
          <div className="one-way">
            <p>One Way</p>
          </div>
          <div className="round-trip">
            <p>Round Trip</p>
          </div>
        </div>


        <div className="row-1">
          <div className="from-col">
            <p>From</p>
            <Form.Control type="text" placeholder="Manila" />
          </div>

          <div className="btn-switch">
            <SwitchArrow _color="#fff" />
          </div>

          <div className="to-col">
            <p>To</p>
            <Form.Control type="text" placeholder="Rome" />
          </div>
        </div>

        <div className="row-2">
          <div className="departure-date">
            <p>Departure Date</p>
            <Form.Control type="date" placeholder="September 5, 2023" />
          </div>

          <div className="passengers">
            <p>Passengers</p>
            <Form.Select>
              <option value="val1">1 Adult - 0 Child</option>
              <option value="val2">1 Adult - 0 Child</option>
            </Form.Select>
          </div>

          <div className="cabin-class">
            <p>Cabin Class</p>
            <Form.Select>
              <option value="val1">Economy</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <ButtonComponent buttonText="SEARCH" buttonClass="default-btn" />
        </div>
      </div>
    </Container>
  );
}

export default Flights;
