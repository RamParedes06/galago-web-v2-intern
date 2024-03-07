import { Form, FormControl, Button } from "react-bootstrap";
import ButtonComponent from "../ui/ButtonComponent";
function PassengerDetails() {
  return (
    <div>
      <Form className="form-passenger-details">
        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Select Frequent Passenger</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs.</option>
          <option value="Ms">Ms.</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="">
          <Form.Control type="name" placeholder="First Name*" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control type="name" placeholder="Middle Name (Optional)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control type="name" placeholder="Last Name*" />
        </Form.Group>
        <p className="default-state">
          Please make sure your name matches the one on your passport or valid
          government ID.
        </p>

        <div className="bday-nationality-grp">
          <Form.Group className="mb-3  date-form-cntrl" controlId="">
            <Form.Control type="date" placeholder="Date of Birth" />
          </Form.Group>
          <Form.Select className="mb-3" aria-label="Default select example">
            <option>Nationality*</option>
            <option value="Mr">Filipino</option>
          </Form.Select>
        </div>

        <p>Passport or Travel Document</p>
        <Form.Group className="mb-3" controlId="">
          <Form.Control type="name" placeholder="Passport or Document Number" />
        </Form.Group>
        <Form.Group className="mb-3 date-form-cntrl" controlId="">
          <Form.Control type="date" placeholder="Expiration Date*" />
        </Form.Group>

        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Country Issued*</option>
          <option value="">Philippines</option>
        </Form.Select>
        <p className="default-state">
          Please make sure your passport or ID is valid for at least 6 months
          from your departure date.
        </p>
      </Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree that all the information I provided will be used for my future flight bookings."
        />
      </Form.Group>
    </div>
  );
}

export default PassengerDetails;
