import React from "react";
import { Modal } from "react-bootstrap";
import ButtonComponent from "../ui/ButtonComponent";
import galago_wink from "../../resources/hotelbooking/galago_logo_wink.png";
import { Link } from "react-router-dom";
function HotelBookingModal({ show, onHide }: any) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="modal-height"
      dialogClassName="modal-width"
    >
      <Modal.Body className="d-flex align-items-center justify-content-center">
        <div className="hotel-booking-modal">
          <img src={galago_wink} alt="" />
          <h1 className="body-medium-new">
            Redirecting you to our Payment Page
          </h1>
          <p className="text-secondary footnote-medium ">
            Almost there! Double-check your booking details. Click Pay Now to
            proceed or Cancel to make any changes.
          </p>
          <div className="hotel-booking-modal-btns">
            <Link to={"/hotel-booking-confirmation"}>
              <div style={{ maxWidth: "200px", width: "100%" }}>
                <ButtonComponent buttonText="Pay Now" className="default-btn" />
              </div>
            </Link>
            <ButtonComponent
              buttonText="Cancel"
              onClick={onHide}
              className="border-btn"
              style={{
                maxWidth: "200px",
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default HotelBookingModal;
