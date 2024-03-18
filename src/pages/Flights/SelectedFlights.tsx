import "../../styles/selectedflight.scss";
import "../../styles/selectedflight.scss";
import { Button, Container } from "react-bootstrap";
import NavigationBar from "../../components/ui/NavigationBar";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FooterComponent from "../../components/ui/FooterComponent";
import { useState } from "react";
import FlightLoadingModal from "../../components/selectedflight/FlightLoadingModal";
import { useNavigate } from "react-router-dom";
import FloatingBanner from "../../components/flightresult/FloatingBanner";

const SelectedFlights = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
      navigate("/booking-details");
    }, 2000);
  };
  return (
    <>
      <div className="selected-flight-container">
        <NavigationBar />
        <div className="floating-banner-header-container">
          <div className="floating-banner-header"></div>
          <Container>
            <div className="floating-banner-overlap">
              <FloatingBanner />
            </div>
          </Container>
        </div>
        <Container className="departure-flight-container">
          <div className="return-flight">
            <p className="text-grey">Selected departure flight</p>
            <h1>
              Manila <span>MNL</span> to Rome <span>FCO</span>
            </h1>
          </div>

          <div className="selected-flight-card">
            <div className="selected-tag">Selected</div>
            <div className="info-1">
              <h4>09:05</h4>
              <p className="text-grey">MNL</p>
            </div>

            <div className="info-2">
              <p>Direct</p>
              <div id="broken-border"></div>
              <p>1h 35m</p>
            </div>

            <div className="info-3">
              <h4>17:25</h4>
              <p className="text-grey">FCO</p>
            </div>

            <div className="info-4">
              <p className="text-grey">Flight Number</p>
              <h4>Z2773</h4>
            </div>

            <div className="info-5">
              <p className="text-grey">Date</p>
              <h4>Aug 29, 2023</h4>
            </div>

            <div className="info-6">
              <p>Total Fare per Passenger</p>
              <h3>PHP 7, 384 / pax</h3>
            </div>

            <ButtonComponent
              buttonText="CHANGE FLIGHT"
              className="default-btn"
              style={{
                width: "max-content",
                borderRadius: "12px",
                fontSize: "12px",
              }}
            />
          </div>

          <div className="back-or-book">
            <ButtonComponent
              buttonText="BACK TO HOME"
              className="border-btn"
              style={{ borderRadius: "12px", fontSize: "12px" }}
            />
            <ButtonComponent
              buttonText="BOOK FLIGHT"
              className="default-btn"
              style={{
                width: "max-content",
                borderRadius: "12px",
                fontSize: "12px",
              }}
              onClick={handleButtonClick}
            />
          </div>
          <FlightLoadingModal
            modalText="Please wait while we process your booking!"
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Container>
      </div>
      <FooterComponent />
    </>
  );
};

export default SelectedFlights;
