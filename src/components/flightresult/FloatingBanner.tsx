import ButtonComponent from "../ui/ButtonComponent";
import "../../styles/floatingbanner.scss";
function FloatingBanner({ showHotelContent }: any) {
  return (
    <>
      {!showHotelContent ? (
        // FlightResultPage Floating Banner Content
        <div className="floating-banner-container">
          <div className="floating-banners">
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
        </div>
      ) : (
        // HotelResultPage Floating Banner Content
        <div className="floating-banner-container">
          <div className="floating-banners gap-5">
            <div className="hotel-banner">
              <p>Destination or Hotel</p>
              <h1>Baguio City</h1>
            </div>
            <div className="hotel-banner">
              <p>Check-in and Check-out Dates</p>
              <h1>Aug 14-16, 2023</h1>
            </div>
            <div className="hotel-banner">
              <p>Guests and Rooms</p>
              <h1>2 Adults, 1 Room</h1>
            </div>
            <section style={{ paddingRight: "2rem" }}>
              <ButtonComponent
                buttonText="EDIT"
                className="default-btn"
                style={{
                  maxWidth: "94px",
                  borderRadius: "12px",
                  height: "min-content",
                }}
              />
            </section>
          </div>
          <div className=""></div>
        </div>
      )}
    </>
  );
}

export default FloatingBanner;
