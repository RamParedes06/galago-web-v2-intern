import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../../styles/modalpromo.scss";
import propertyName from "../../resources/promos/beverly_hills.png";
import ReceivedModal from "./ReceivedModal";

function CenteredModal({ show, onHide, onSubmit }) {
  const handleModalSubmit = (event) => {
    // To prevent the default form submission behavior
    event.preventDefault();
    onSubmit();
    onHide();
  };

  const packageData = [
    {
      id: 1,
      package: "A",
    },
    {
      id: 2,
      package: "B",
    },

    {
      id: 3,
      package: "C",
    },

    {
      id: 4,
      package: "D",
    },

    {
      id: 5,
      package: "E",
    },

    {
      id: 6,
      package: "F",
    },
  ];

  const hotelData = [
    {
      image: propertyName,
      property: "A",
    },
    {
      id: 2,
      property: "B",
    },

    {
      id: 3,
      property: "C",
    },

    {
      id: 4,
      property: "D",
    },

    {
      id: 5,
      property: "E",
    },

    {
      id: 6,
      property: "F",
    },
  ];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="book-now">Book Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-grid">
          <div className="modal-hotel">
            <h1>Select hotel</h1>
            <p>
              Hotels in this list are in the same class, choose your preferred
              hotel.
            </p>

            <div className="cards-container">
              {hotelData.map((hotel) => (
                <div className="each-card">
                  <div className="card-img">
                    <img src={propertyName} alt="" />
                  </div>
                  <div className="card-details">
                    <h1>Property Name</h1>
                    <p>2 nights • 2 adults</p>
                    <p>Location</p>
                  </div>
                </div>
              ))}
            </div>
            {/* For gradient white  */}
            <div className="package-2"></div>
          </div>

          <div className="vertical-line"></div>

          <div>
            <h1>Your information</h1>
            <p>Make sure to input your details.</p>

            <Form className="form-container" onSubmit={handleModalSubmit}>
              <Form.Select className="form-element">
                <option value="">Selected Package</option>
                {packageData.map((each_package) => (
                  <option value={each_package.id}>
                    Package {each_package.package}
                  </option>
                ))}
              </Form.Select>

              <Form.Group className="name-group">
                {/* Names  */}
                <Form.Control
                  type="name"
                  placeholder="First Name*"
                  className="form-element name-one"
                />
                <Form.Control
                  type="name"
                  placeholder="Middle Name (Optional)"
                  className="form-element name-two"
                />
                <Form.Control
                  type="name"
                  placeholder="Last Name*"
                  className="form-element name-three"
                />
              </Form.Group>
              <p>Make sure it matches the name on your valid government IDs</p>

              {/* Email Address  */}
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email Address*"
                  className="form-element"
                />
              </Form.Group>

              {/* Guests and Rooms  */}
              <Form.Select className="form-element">
                <option>Guest and Rooms</option>
                {packageData.map((each_package) => (
                  <option value={each_package.id}>
                    Package {each_package.package}
                  </option>
                ))}
              </Form.Select>

              {/* Mobile numbers  */}
              <Form.Group className="mobile">
                {/* <Col lg={3}> */}
                {/* Starting number  */}
                <Form.Select className="first-mobile form-element">
                  <option>+63</option>
                  <option>+62</option>
                </Form.Select>
                {/* </Col> */}

                {/* <Col lg={9}> */}
                {/* Full mobile number  */}
                <Form.Control
                  className="second-mobile form-element"
                  type="name"
                />
                {/* </Col> */}
              </Form.Group>

              {/* Calendar  */}
              <Form.Group className="calendar">
                <Form.Control
                  type="date"
                  placeholder="Check-in date"
                  className="form-calendar"
                />
                <Form.Control
                  type="date"
                  placeholder="Check-out date"
                  className="form-calendar"
                />
              </Form.Group>

              {/* Textarea  */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label>Type additional messages here</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows={7}
                  placeholder="Type additional messages here"
                  className="form-element"
                />
              </Form.Group>

              <Button
                type="submit"
                className="default-btn callout-medium"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
