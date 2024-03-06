import ButtonComponent from "../ui/ButtonComponent";

function FlightBanner() {
  return (
    <>
      <div className="flight-banner-container">
        <div className="banners">
          <div className="flight-banner">
            <p>Flight Type</p>
            <h1>Round Trip</h1>
          </div>
          <div className="flight-banner">
            <p>Departure Flight</p>
            <h1>
              MANILA <span> MNL</span> to Cebu <span> CEB</span>
            </h1>
            <p>August 27, 2023</p>
          </div>
          <div className="flight-banner">
            <p>Return Flight</p>
            <h1>
              Cebu <span> CEB</span> to Manila <span> MNL</span>
            </h1>
            <p>August 31, 2023</p>
          </div>
          <div className="flight-banner">
            <p>Passengers</p>
            <h1>1 adult</h1>
          </div>
          <div className="flight-banner">
            <p>Cabin Class</p>
            <h1>Economy</h1>
          </div>
        </div>
        <ButtonComponent
          buttonText="EDIT"
          className="default-btn"
          style={{
            maxWidth: "94px",
            borderRadius: "12px",
            height: "min-content",
          }}
        />
      </div>
    </>
  );
}

export default FlightBanner;
