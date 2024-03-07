import { Modal } from "react-bootstrap";
import galago_logo from "../../resources/flightresults/galago_logo.png";
import "../../styles/selectedflight.scss";

type FlightLoadingModalProps = {
  modalText?: string;
  show: boolean;
  onHide: () => void;
};
function FlightLoadingModal({
  modalText,
  show,
  onHide,
  ...props
}: FlightLoadingModalProps) {
  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      // size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="loading-modal-body">
        <img src={galago_logo} alt="" />
        <p> {modalText}</p>
      </Modal.Body>
    </Modal>
  );
}

export default FlightLoadingModal;
