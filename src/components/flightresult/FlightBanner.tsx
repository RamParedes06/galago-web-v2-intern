import ButtonComponent from "../ui/ButtonComponent";

function FlightBanner() {
  return (
    <>
      <div className="flight-banner-container">
        <div className="banners">
          <div className="flight-banner">
            <p>Flight Type</p>
            <h1>One Way</h1>
          </div>
          <div className="flight-banner">
            <p>Departure Flight</p>
            <h1>
              MANILA <span> MNL</span> to Rome <span> FCO</span>
            </h1>
            <p>August 27, 2023</p>
          </div>
          <div className="flight-banner">
            <p>Cabin Class</p>
            <h1>Economy</h1>
          </div>
        </div>
        <ButtonComponent
          buttonText="EDIT"
          buttonClass="default-btn"
          buttonStyle={{
            maxWidth: "94px",
            padding: 12,
            borderRadius: "12px",
          }}
        />
      </div>
    </>
  );
}

export default FlightBanner;
