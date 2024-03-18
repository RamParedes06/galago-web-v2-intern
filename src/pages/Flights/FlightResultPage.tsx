import FlightBanner from "../../components/flightresult/FloatingBanner";
import SearchFilter from "../../components/flightresult/SearchFilter";
import "../../styles/flightresult.scss";
import { Container } from "react-bootstrap";
import DepartureInfo from "../../components/flightresult/DepartureInfo";
import SortByDay from "../../components/flightresult/SortByDay";
import FlightInfoCard from "../../components/flightresult/FlightInfoCard";
import FlightModal from "../../components/flightresult/FlightModal";
import NavigationBar from "../../components/ui/NavigationBar";
import FooterComponent from "../../components/ui/FooterComponent";

const FlightResultPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="flight-result-container">
        <div className="floating-banner-header-container">
          <div className="floating-banner-header"></div>
          <Container>
            <div className="floating-banner-overlap">
              <FlightBanner />
            </div>
          </Container>
        </div>

        <Container className="flight-container">
          <div className="search-container">
            <SearchFilter showHotelContent={false} />
          </div>
          <div className="info-container">
            <DepartureInfo />
            <SortByDay />
            <FlightInfoCard />
          </div>
        </Container>
        <FooterComponent />
      </div>
    </>
  );
};

export default FlightResultPage;
