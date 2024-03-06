import { Modal } from "react-bootstrap";
import galago_logo from "../../resources/flightresults/galago_logo.png";
import "../../styles/selectedflight.scss";

function FlightLoadingModal(props: any) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="loading-modal-body">
        <img src={galago_logo} alt="" />
        <p>Please wait while we process your booking!</p>
      </Modal.Body>
    </Modal>
  );
}

export default FlightLoadingModal;
