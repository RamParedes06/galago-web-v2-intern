import FlightBanner from "../components/flightresult/FlightBanner";
import SearchFilter from "../components/flightresult/SearchFilter";
import "../styles/flightresult.scss";
import { Container } from "react-bootstrap";
import DepartureInfo from "../components/flightresult/DepartureInfo";
import SortByDay from "../components/flightresult/SortByDay";
import FlightInfoCard from "../components/flightresult/FlightInfoCard";

const FlightResultPage = () => {
  return (
    <>
      <div className="flight-result-container">
        <div className="flight-header-container">
          <div className="flight-header"></div>
          <Container>
            <div className="flight-overlap">
              <FlightBanner />
            </div>
          </Container>
        </div>

        <Container className="flight-container">
          <div className="search-container">
            <SearchFilter />
          </div>
          <div className="info-container">
            <DepartureInfo />
            <SortByDay />
            <FlightInfoCard />
          </div>
        </Container>
      </div>
    </>
  );
};

export default FlightResultPage;
