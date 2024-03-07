import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function ContactDetails() {
  return (
    <div>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="name" placeholder="First Name*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="name" placeholder="Middle Name (Optional)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="name" placeholder="Last Name*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="email" placeholder="Email Address*" />
      </Form.Group>

      <div className="mobile-contact-details d-grid ">
        <Form.Select className="mb-3" aria-label="Default select example">
          <option>+63</option>
          <option value="Mr">+62</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="">
          <Form.Control type="number" placeholder="Mobile Number (Optional)" />
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I have read and agreed to the booking Terms and Conditions of GalaGO!, Flight Booking Policies, Privacy Statement."
        />
      </Form.Group>
    </div>
  );
}

export default ContactDetails;
