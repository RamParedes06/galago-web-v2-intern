import { Container } from "react-bootstrap";
import { Star } from "../../components/ui/svg/Star";
import NavigationBar from "../../components/ui/NavigationBar";
import { Share } from "../../components/ui/svg/Share";
import { Heart } from "../../components/ui/svg/Heart";
import HotelGallery from "../../components/hotelresult/HotelGallery";
import Offers from "./Offers";
import "../../styles/hotelprofile.scss";
import FooterComponent from "../../components/ui/FooterComponent";

const HotelProfile = () => {
  return (
    <div>
      <Container className="hotel-profile-container">
        <div className="property-container">
          <h1 className="title-large-bold">Property Name</h1>
          <div className="property-subheader d-flex justify-content-between mt-2 align-items-center">
            <div className="property-subheader1 d-flex gap-3 align-items-center">
              <div className="property-stars d-flex gap-1">
                <Star _width={13} _height={13} _color="#016e7f" />
                <Star _width={13} _height={13} _color="#016e7f" />
                <Star _width={13} _height={13} _color="#016e7f" />
                <Star _width={13} _height={13} _color="#016e7f" />
              </div>
              <p>4-star hotel</p>
            </div>
            <div className="property-subheader2 d-flex gap-2">
              <div className="share-wrapper d-flex gap-1">
                <Share />
                <p>Share</p>
              </div>
              <div className="save-wrapper d-flex gap-1">
                <Heart _width={24} _height={24} />
                <p>Save</p>
              </div>
            </div>
          </div>
          <HotelGallery />
          <div className="about-stay-container mb-3">
            <h1 className="ticket-large-semibold">About your stay</h1>
            <p className="callout-medium">
              July 24 - 26, 2023 | 1 room , 2 adults | Baguio
            </p>
            <p>
              Make yourself at home in one of the 144 individually furnished
              guestrooms, featuring refrigerators and LCD televisions. Cable
              programming and iPod docking stations are provided for your
              entertainment, while complimentary wireless Internet access keeps
              you connected. Bathrooms feature showers with rainfall showerheads
              and complimentary toiletries. Conveniences include phones, as well
              as safes and desks.
            </p>

            <a href="/#/hotel-profile" className="primary-0">
              See More
            </a>
          </div>
          <Offers />

          <div className="hotel-navigator">
            <a href="/#/hotel-profile">Available Rooms</a>
            <a href="/#/hotel-profile">Location</a>
            <a href="/#/hotel-profile">Hotel Policies</a>
            <a href="/#/hotel-profile">Other Info</a>
          </div>

          <div className="available-rooms">
            <h1 className="ticket-headline-semibold">Available Rooms</h1>
            <p className="text-secondary">
              Prices might change. You'll see the final price on the next page.
            </p>
          </div>
        </div>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default HotelProfile;
