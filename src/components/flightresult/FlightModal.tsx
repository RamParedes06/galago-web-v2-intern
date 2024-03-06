import { Modal, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonComponent from "../ui/ButtonComponent";
import "../../styles/modalflight.scss";
import check_icon from "../../resources/flightresults/check_icon.png";
function FlightModal(props: any) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p> Flight Details</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="title">
          <h1>Manila to Rome</h1>
        </div>
        <div className="modal-info-card">
          <div className="date">
            <h4>21:40</h4>
            <p className="text-grey">Mar 29</p>
          </div>

          <div className="airport">
            <h4>Manila (MNL)</h4>
            <p>Ninoy Aquino International Airport</p>
          </div>
        </div>

        <div className="info-container">
          <div className="airline">
            <p>Cebu Pacific Air</p>
          </div>

          <p>In-flight meal</p>
          <p>Cabin baggage 7kg</p>
          <p>Wi-fi</p>
          <p>100% On-Time</p>
        </div>

        <div className="modal-info-card">
          <div className="date">
            <h4>21:40</h4>
            <p className="text-grey">Mar 29</p>
          </div>

          <div className="airport">
            <h4>Rome (FCO)</h4>
            <p>Rome Fiumicino Airport</p>
          </div>
        </div>

        <div className="inclusions-container">
          <h1>What's Included?</h1>
          <div className="inclusion">
            <div className="check_inclusion">
              <img src={check_icon} alt="check icon" />
            </div>
            <div className="text-inclusion">
              <h4>Travel Tax Included</h4>
              <p className="text-grey">
                This flight fare already includes Philippine travel tax so you
                can fly hassle-free!
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="inclusions-container">
          <h2>Refund Policy</h2>
          <div className="inclusion">
            <div className="check_inclusion">
              <img src={check_icon} alt="check icon" />
            </div>
            <div className="text-inclusion">
              <h4>Refund Available</h4>
              <p className="text-grey">
                This flight is eligible for a refund request in case of
                cancellation or delay!
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="inclusions-container">
          <h2>Reschedule Policy</h2>
          <div className="inclusion">
            <div className="check-inclusion">
              <img src={check_icon} alt="check icon" />
            </div>
            <div className="text-inclusion">
              <h4>Reschedule Available</h4>
              <p className="text-grey">
                This flight is eligible for rescheduling, if you wish to change
                the time or date!
              </p>
            </div>
          </div>
          <hr id="last-hr" />
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <div className="fare">
          <h2>Total Fare for 1 Passenger(s)</h2>
          <h4>PHP 10, 835.93</h4>
        </div>
        <Link to="/selected-flight" style={{ textDecoration: "none" }}>
          <ButtonComponent
            buttonText="SELECT FLIGHT"
            className="default-btn"
            style={{
              width: "fit-content",
              borderRadius: "12px",
            }}
          />
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default FlightModal;
