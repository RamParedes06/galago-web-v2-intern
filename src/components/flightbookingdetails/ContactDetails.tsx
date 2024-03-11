import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import ButtonComponent from "../ui/ButtonComponent";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function ContactDetails() {
  return (
    <div>
      <Form.Group className="mb-3 " controlId="">
        <Form.Control
          className="booking-detail-input"
          type="name"
          placeholder="First Name*"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          className="booking-detail-input"
          type="name"
          placeholder="Middle Name (Optional)"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          className="booking-detail-input"
          type="name"
          placeholder="Last Name*"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          className="booking-detail-input"
          type="email"
          placeholder="Email Address*"
        />
      </Form.Group>

      <div className="mobile-contact-details d-grid ">
        <Form.Select
          className="mb-3 booking-detail-input"
          aria-label="Default select example"
        >
          <option>+63</option>
          <option value="Mr">+62</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            className="booking-detail-input"
            type="number"
            placeholder="Mobile Number (Optional)"
          />
        </Form.Group>
      </div>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicCheckbox2">
        <Form.Check
          className="booking-detail-input"
          type="checkbox"
          label="I have read and agreed to the booking Terms and Conditions of GalaGO!, Flight Booking Policies, Privacy Statement."
        />
      </Form.Group>

      <ButtonComponent
        buttonText="Next"
        className="default-btn"
        style={{ width: "100%", backgroundColor: "#ADADAD" }}
        disabled
      />
    </div>
  );
}

export default ContactDetails;
