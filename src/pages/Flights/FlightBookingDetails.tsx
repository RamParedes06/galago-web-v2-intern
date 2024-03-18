import { Container } from "react-bootstrap";
import FlightProgressLine from "../../components/flightbookingdetails/FlightProgressLine";
import NavigationBar from "../../components/ui/NavigationBar";
import BookingDetails from "../../components/flightbookingdetails/BookingDetails";
import PassengerDetails from "../../components/flightbookingdetails/PassengerDetails";
import ContactDetails from "../../components/flightbookingdetails/ContactDetails";
import BookingSummary from "../../components/flightbookingdetails/PriceSummary";
import "../../styles/flightbookingdetails.scss";
import FooterComponent from "../../components/ui/FooterComponent";

const FlightBookingDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <NavigationBar />
      <FlightProgressLine />

      <Container className="flight-booking-details-container">
        <BookingSummary />
        <div className="booking-details-container">
          <div className="booking-details">
            <h1>Booking Details</h1>
            <p className="callout-medium">
              Confirm the details below to finalize your booking!
            </p>
          </div>
          <BookingDetails />
        </div>

        <div className="passenger-details-container">
          <div className="passenger-details">
            <h1>Passenger Details</h1>
            <p className="callout-medium">
              Fill in the details to finalize your booking!
            </p>
          </div>
          <PassengerDetails />
        </div>

        <div className="contact-details-container">
          <div className="contact-details">
            <h1>Contact Details</h1>
            <p className="callout-medium">
              Please provide your contact details so we can reach out regarding
              any booking or payment updates.
            </p>
          </div>
          <ContactDetails />
        </div>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default FlightBookingDetails;
