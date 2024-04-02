import bookingDetail1 from "../../resources/hotelbooking/hotelbookingdetail1.png";

function HotelBookingSummaryCard() {
  return (
    <div className="hotel-booking-summary-card">
      <p className="subheadline-medium mb-2">You've booked a stay at</p>
      <h1 className="primary-0 heading-large-bold mb-4">
        Hotel / Property Name will be here
      </h1>
      <img src={bookingDetail1} />
      <div className="hotel-book-summary-infos body-medium">
        <div className="hotel-book-summary-info">
          <p>August 14 - 16, 2023</p>
          <p>(2 nights)</p>
        </div>
        <div className="hotel-book-summary-info">
          <div className="hotel-book-summary-overview">
            <p>Paid Today</p>
            <a href="/" className="a-medium-new primary-0">
              View Price Overview
            </a>
          </div>

          <p>PHP 6,800.00</p>
        </div>
        <div className="hotel-book-summary-info">
          <p>Booking Reference</p>
          <p>ABCD 1234</p>
        </div>
      </div>
    </div>
  );
}

export default HotelBookingSummaryCard;
