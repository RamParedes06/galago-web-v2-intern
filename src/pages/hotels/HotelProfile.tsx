import { Container } from "react-bootstrap";
import { Star } from "../../components/ui/svg/Star";
import { Share } from "../../components/ui/svg/Share";
import { Heart } from "../../components/ui/svg/Heart";
import { Map } from "../../components/ui/svg/Map";
import HotelGallery from "../../components/hotelprofile/HotelGallery";
import Offers from "../../components/hotelprofile/Offers";

import "../../styles/hotelprofile.scss";
import "../../styles/modalgallery.scss";
import FooterComponent from "../../components/ui/FooterComponent";
import HotelRooms from "../../components/hotelprofile/HotelRooms";
import MapPlaceholder from "../../resources/hotelresults/map_placeholder.png";
import { HomeIcon } from "../../components/ui/svg/HomeIcon";
import { Info } from "../../components/ui/svg/Info";
import CustomModal from "../../components/hotelprofile/CustomModal";
import SelectedHotel from "../../components/hotelprofile/SelectedHotel";
import { useEffect, useState } from "react";
import NavigationBarWhite from "../../components/ui/NavigationBarWhite";
import axios from "axios";
import ApiRoute from "../../apiRoutes";

const HotelProfile = () => {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [reservedRoom, setReservedRoom] = useState<{ [index: string]: any }>(
    {}
  );

  const hotel = localStorage.getItem("hotel");

  console.log(hotel, "pwet ni gelo");

  const [modalOpen, setModalOpen] = useState(false);
  const handleShowModal = (isOpen: boolean) => {
    setModalOpen(isOpen);
  };
  return (
    <div className="hotel-profile-bg">
      <NavigationBarWhite />
      <CustomModal />

      <Container className="hotel-profile-container">
        <div className="property-container">
          <h1 className="title-large-bold">asdasd</h1>
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
            <a
              href="#available-rooms"
              onClick={() => handleScroll("available-rooms")}
            >
              Available Rooms
            </a>
            <a
              href="#hotel-location"
              onClick={() => handleScroll("hotel-locations")}
            >
              Location
            </a>
            <a
              href="#hotel-policies"
              onClick={() => handleScroll("hotel-policies")}
            >
              Hotel Policies
            </a>
            <a
              href="#hotel-policies"
              onClick={() => handleScroll("hotel-locations")}
            >
              Other Info
            </a>
          </div>

          <div className="available-rooms" id="available-rooms">
            <h1 className="ticket-headline-semibold">Available Rooms</h1>
            <p className="text-secondary">
              Prices might change. You'll see the final price on the next page.
            </p>
            <p>Modal is {modalOpen ? "open" : "closed"}</p>
            <HotelRooms
              setReservedRoom={setReservedRoom}
              handleShowModal={handleShowModal}
            />
          </div>

          <center>
            <p className="heading-medium-bold see-more">See More Rooms</p>
          </center>

          <div className="hotel-location-container" id="hotel-location">
            <h1 className="hotel-location ticket-headline-semibold">
              Location
            </h1>
            <p className="callout-medium my-3">
              Sheridan Dr, Camp John Hay, Baguio, Philippines, 2600
            </p>
            <div className="map-image">
              <img src={MapPlaceholder} alt="" />
              <div className="map-overlay">
                <span>
                  <HomeIcon _width={27} _height={27} _color="white" />
                </span>
              </div>

              <div className="map-overlay-border"></div>
            </div>
            <p className="primary-0 d-flex align-items-center gap-2 my-3">
              Nearby Attractions <Map />
            </p>
            <p>Greenbelt Shopping Mall 0.8mi (1.4 km)</p>
          </div>

          <div className="hotel-policies-container" id="hotel-policies">
            <h1 className="ticket-headline-semibold mb-4">Hotel Policies</h1>
            <div className="hotel-policies">
              <div className="hotel-policy">
                <div className=" d-flex align-items-center gap-2">
                  <Info _width={20} _height={20} _color="#016e7f" />{" "}
                  <span className="body-medium">Check-in time</span>
                </div>
                <p className="subheadline-regular">Starts at 2:00 PM</p>
              </div>
              <div className="hotel-policy">
                <div className=" d-flex align-items-center gap-2">
                  <Info _width={20} _height={20} _color="#016e7f" />{" "}
                  <span className="body-medium">Check-out time</span>
                </div>
                <p className="subheadline-regular">Until 11:59 AM</p>
              </div>
              <div className="hotel-policy">
                <div className=" d-flex align-items-center gap-2">
                  <Info _width={20} _height={20} _color="#016e7f" />{" "}
                  <span className="body-medium">Cancellation policy</span>
                </div>
                <p className="subheadline-regular">
                  Cancellation policies vary depending on the type of
                  accommodation. Kindly review the specific{" "}
                  <span className="primary-0 text-decoration-underline">
                    conditions associated with each room option
                  </span>{" "}
                  while making your selection.
                </p>
              </div>
              <div className="hotel-policy">
                <div className=" d-flex align-items-center gap-2">
                  <Info _width={20} _height={20} _color="#016e7f" />{" "}
                  <span className="body-medium">Airport transfer</span>
                </div>
                <p className="subheadline-regular">
                  This property offers transfers from the airport (surcharges
                  may apply). To arrange pick-up, guests must contact the
                  property 48 hours prior to arrival, using the contact
                  information on the booking confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && <SelectedHotel reservedRoom={reservedRoom} />}
      </Container>
      <FooterComponent />
    </div>
  );
};

export default HotelProfile;
