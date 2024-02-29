import FlightBanner from "../components/flightresult/FlightBanner";
import SearchFilter from "../components/flightresult/SearchFilter";
import "../styles/flightresult.scss";
import { Container } from "react-bootstrap";

const FlightResultPage = () => {
  return (
    <>
      <div className="flight-header-container">
        <div className="flight-header"></div>
        <Container>
          <div className="flight-overlap">
            <FlightBanner />
          </div>

          <div className="search-container">
            <SearchFilter />
          </div>
        </Container>
      </div>
    </>
  );
};

export default FlightResultPage;
