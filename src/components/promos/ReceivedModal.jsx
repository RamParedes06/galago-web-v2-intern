import React from "react";
import { Modal, Button } from "react-bootstrap";
import gally_wink from "../../resources/promos/Gally_wink.svg";
import "../../styles/modalpromo.scss";
import "../../styles/button.scss";
import ButtonComponent from "../ui/ButtonComponent";
function ReceivedModal({ show, onHide }) {
  return (
    <Modal
      // {...props}
      // size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={onHide}
      // custom modal sizes
      contentClassName="modal-height"
      dialogClassName="modal-width"
      centered
    >
      <Modal.Body className="received-modal-body">
        <div className="receivedModal">
          <img src={gally_wink} alt="" />

          <div className="received-modal-content">
            <h1>We've received your booking!</h1>
            <p>
              Our Travel Desk should get back to you shortly. <br /> Check your
              inbox. Hope we're not in your Spam folder!
            </p>
          </div>
          <ButtonComponent
            buttonText="Close"
            className="default-btn footnote-medium"
            onClick={onHide}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ReceivedModal;
