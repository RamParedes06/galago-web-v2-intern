import { Container } from "react-bootstrap";
import ButtonComponent from "../../components/ui/ButtonComponent";
import NavigationBar from "../../components/ui/NavigationBar";
import FooterComponent from "../../components/ui/FooterComponent";
import "../../styles/bookingsummary.scss";
import check_icon from "../../resources/check-icon.png";
import { Link } from "react-router-dom";
import HotelProgressLine from "../../components/hotelbookingdetails/HotelProgressLine";
import HotelBookingSummaryCard from "../../components/hotelbookingdetails/HotelBookingSummaryCard";
import NavigationBarWhite from "../../components/ui/NavigationBarWhite";

const HotelBookingConfirmation = () => {
  return (
    <div className="hotel-booking-summary-bg">
      <NavigationBarWhite />
      <HotelProgressLine />
      <Container className="booking-confirmation-container">
        <div className="confirmed-banner">
          <div className="check-wrapper mb-3">
            <img src={check_icon} alt="" />
          </div>

          <div className="confirmed-content">
            <h1>Your booking is confirmed!</h1>
            <p>
              Payment for your hotel booking is successful. <br />
              Thanks for booking with GalaGO!
            </p>
          </div>
          <Link to={"/"}>
            <ButtonComponent
              buttonText="Back to Home"
              className="default-btn"
              style={{ width: "100%" }}
            />
          </Link>
        </div>

        <HotelBookingSummaryCard />
      </Container>
      <FooterComponent />
    </div>
  );
};

export default HotelBookingConfirmation;
