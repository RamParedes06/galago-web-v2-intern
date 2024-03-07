import { Container } from "react-bootstrap";
import FlightProgressLine from "../../components/flightresult/FlightProgressLine";
import NavigationBar from "../../components/ui/NavigationBar";
import "../../styles/flightresult.scss";

const PassengerDetails = () => {
  return (
    <div>
      {/* <NavigationBar /> */}
      <FlightProgressLine />

      <Container className="booking-details-container">
        <h1>Booking Details</h1>
        <p>Confirm the details below to finalize your booking!</p>
        <div className="booking-details-card">
          <div className="booking-details-card-header">
            <h1>Manila Cebu</h1>
            <p>Change Flight</p>
          </div>
          <p className="text-grey">
            Ninoy Aquino International T1 - Mactan Cebu International Airport T1
          </p>

          <div className="departure-date-container">
            <p className="primary-text-color">Departure</p>
            <p className="text-grey">Thu, Aug 24</p>
          </div>

          <div className="airlines-flight-container">
            <p>Philippines Air Asia</p>
            <p className="text-grey">Z2777 - 320</p>
          </div>

          <div className="time-location-container">
            <div className="time-location">
              <p>15:05</p>
              <p className="text-grey">MNL</p>
            </div>

            <div className="hours-direct">
              <p className="text-grey">3h 40m</p>
              <div className="hours-direct-p"></div>
              <p className="text-grey">Direct</p>
            </div>

            <div className="time-location">
              <p>16:30</p>
              <p className="text-grey">CEB</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PassengerDetails;
