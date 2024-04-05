import "../styles/bookandtrip.scss";
import NavigationBarWhite from "../components/ui/NavigationBarWhite";

const upcoming = [
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property1.jpg",
    status: "Flights.Upcoming",
    title: "Flight from Manila to Cebu",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-manila-cebu",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property3.png",
    status: "Flights.Upcoming",
    title: "Flight from Cebu to Manila",
    date: "Fri, 19 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-cebu-manila",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property2.png",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property4.jpg",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
];

const complete = [
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property1.jpg",
    status: "Flights.Upcoming",
    title: "Flight from Manila to Cebu",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-manila-cebu",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property2.png",
    status: "Flights.Upcoming",
    title: "Flight from Cebu to Manila",
    date: "Fri, 19 Dec 2008 - Sun, 4 Dec 2008",
    link: "/flight-cebu-manila",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property2.png",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/BookingsAndTripsPage+Assets/Property2.png",
    status: "Hotel.Upcoming",
    title: "Property Name",
    date: "Fri, 2 Dec 2008 - Sun, 4 Dec 2008",
    link: "/hotel",
  },
];

const BookAndTrip = () => {
  return (
    <>
      <NavigationBarWhite />
      <div className="booking-container">
        <h1>Bookings & Trips</h1>
        <p className="title">Upcoming</p>
        <div className="upcoming-container">
          {upcoming.map((data, i) => (
            <div className="info-card" key={i}>
              <div className="image-cont">
                <img src={data.image} alt="" />
              </div>

              <div className="info-list d-flex flex-column gap-1">
                <span className="card-status">{data.status}</span>
                <div>
                  <p className="card-title">{data.title}</p>
                  <p className="card-date">{data.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="title">
          <p className="complete-title">Complete</p>
          <div className="complete-container">
            {complete.map((data, i) => (
              <div className="info-card" key={i}>
                <div className="image-cont">
                  <img src={data.image} alt="" />
                </div>

                <div className="info-list d-flex flex-column gap-1">
                  <span className="card-status">{data.status}</span>
                  <div>
                    <p className="card-title">{data.title}</p>
                    <p className="card-date">{data.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAndTrip;
