import React from "react";
import FlightBanner from "../../components/flightresult/FloatingBanner";
import NavigationBar from "../../components/ui/NavigationBar";
import { Container } from "react-bootstrap";
import "../../styles/hotelresult.scss";
import FloatingBanner from "../../components/flightresult/FloatingBanner";
import SearchFilter from "../../components/flightresult/SearchFilter";
import DepartureInfo from "../../components/flightresult/DepartureInfo";
import FlightInfoCard from "../../components/flightresult/FlightInfoCard";
import SortByDay from "../../components/flightresult/SortByDay";
import HotelInfoCard from "../../components/hotelresult/HotelInfoCard";
import FooterComponent from "../../components/ui/FooterComponent";
const HotelResultPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="hotel-result-container">
        <div className="floating-banner-header-container">
          <div className="floating-banner-header"></div>
          <Container>
            <div className="floating-banner-overlap">
              <FloatingBanner showHotelContent={true} />
            </div>

            <div className="hotel-container">
              <div className="search-container">
                <SearchFilter showHotelContent={true} />
              </div>
              <div className="info-container">
                <div className="hotel-sort ticket-large-medium">
                  <p id="p-property">
                    <span>212</span> properties found in{" "}
                    <span>Baguio City</span>
                  </p>
                  <p className="callout-medium">
                    Sort by: <span className="primary-0">Recommended</span>
                  </p>
                </div>
                <HotelInfoCard />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HotelResultPage;
