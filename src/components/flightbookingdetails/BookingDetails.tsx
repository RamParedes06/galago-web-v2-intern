function BookingDetails() {
  return (
    <div>
      <div className="booking-details-card shadow-light-300 rounded-3">
        <div className="booking-details-card-header">
          <h1>Manila Cebu</h1>
          <p className="footnote-medium primary-0">Change Flight</p>
        </div>
        <p className="text-grey">
          Ninoy Aquino International T1 - Mactan Cebu International Airport T1
        </p>

        <div className="departure-date-container">
          <p className="primary-0 callout-medium">Departure</p>

          <p className="text-grey">Thu, Aug 24</p>
        </div>
        <hr />

        <div className="airlines-flight-container">
          <p className="callout-medium">Philippines Air Asia</p>
          <p className="text-grey">Z2777 - 320</p>
        </div>

        <div className="time-location-container">
          <div className="time-location">
            <p className="fw-bold">15:05</p>
            <p className="text-grey">MNL</p>
          </div>

          <div className="hours-direct">
            <p className="text-grey">3h 40m</p>
            <div className="hours-direct-p"></div>
            <p className="text-grey">Direct</p>
          </div>

          <div className="time-location">
            <p className="fw-bold">16:30</p>
            <p className="text-grey">CEB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
