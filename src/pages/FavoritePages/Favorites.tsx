import React, { useState } from "react";
import "../../styles/favoritespage.scss";
import { Arrow } from "../../components/ui/svg/Arrow";
import { Share } from "../../components/ui/svg/Share";
import { MeatballsMenu } from "../../components/ui/svg/MeatballsMenu";
import { Chevron } from "../../components/ui/svg/Chevron";
import { Delete } from "../../components/ui/svg/Delete";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { CopyLink } from "../../components/ui/svg/CopyLink";
import { Mail } from "../../components/ui/svg/Mail";
import { Facebook } from "../../components/ui/svg/Facebook";
import { Messenger } from "../../components/ui/svg/Messenger";
import { Twitter } from "../../components/ui/svg/Twitter";
import { Embed } from "../../components/ui/svg/Embed";
import { Star } from "../../components/ui/svg/Star";
import FooterComponent from "../../components/ui/FooterComponent";

type data = {
  link: string;
  favTags: string;
  tag: string;
  tagTitle: string;
};

const favoritesinfo = [
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/properties.png",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/properties.png",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2026.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/summervacation2026.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
  {
    image:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation.jpg",
    title: "Property Name or Description",
    nights: 2,
    month: "Sep",
    dateFrom: 18,
    dateTo: 23,

    favTags: [
      {
        tagTitle: "Free Breakfast",
        color: "#016e7f",
      },
    ],
  },
];

const favsModalInfo = [
  {
    images:
      "https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/FavoritesPage+Assets/christmasvacation2023.jpg",
    title: "Property Name",
    rooms: "2 available Rooms",
    rating: "4.8",
    bed: "1 King Bed",
    pool: "Private Swimming Pool",
  },
];

const Favorites = () => {
  const [favsModal, setShowFavsModal] = useState(false);
  return (
    <>
      <div className="fav-page">
        <div className="d-flex align-items-center justify-content-between title">
          <div className="d-flex align-items-center gap-3">
            <Link to="/favorites-page">
              <Arrow _color="#000" _width={24} _height={24} />
            </Link>
            <h3>Christmas vacation 2023</h3>
          </div>
          <div className="d-flex gap-3 buttons">
            <Share _color="#000" _width={24} _height={24} />
            <MeatballsMenu _color="#000" _width={24} _height={24} />
          </div>
        </div>
        <div className="mt-4 mb-4 header d-flex justify-content-between">
          <div>
            <p>6 Saved Properties</p>
          </div>
          <div className="d-flex gap-2">
            <div>Sort by:</div>
            <div>Availability</div>
            <div>
              <Chevron _color="#000" _width={16} _height={16} />
            </div>
          </div>
        </div>
        <div className="favorites-infocard-container">
          {favoritesinfo.map((data: { [index: string]: any }, i: React.Key) => (
            <div
              className="favorites-infocard"
              key={i}
              onClick={() => {
                setShowFavsModal(true);
              }}
            >
              <div className="infocard-img">
                <img src={data.image} alt="" />
              </div>
              <div className="infocard-text d-flex flex-column gap-1">
                <button className="btn m-0 p-0 d-flex flex-row-reverse">
                  <Delete _color="#ADADAD" _width={15} _height={16.67} />
                </button>
                <div>
                  <p className="title">{data.title}</p>
                  <div className="d-flex gap-3">
                    <p className="text">
                      {data.nights} nights • Saved for {data.month}{" "}
                      {data.dateFrom} - {data.dateTo}
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    <strong>PHP 15,000</strong> per night •{" "}
                    <span className="text-secondary text-decoration-underline">
                      PHP 30,000 total
                    </span>
                  </p>
                </div>
                <div className="d-flex gap-2 tag-div">
                  <span className="tag">Free Breakfast</span>
                  <span className="tag">Pet-Friendly</span>
                  <span className="off-tag">17% OFF</span>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <Modal
          show={favsModal}
          onHide={() => setShowFavsModal(false)}
          dialogClassName="modal-500w"
          className="share-fav-modal"
          centered
        >
          <Modal.Header closeButton>Share your travel favorites</Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column gap-4">
              {favsModalInfo.map(
                (data: { [index: string]: any }, i: React.Key) => (
                  <div className="d-flex align-items-center gap-4 modal-card">
                    <div>
                      <img src={data.images} alt="" />
                    </div>
                    <div className="modal-title">
                      <p>{data.title}</p>
                      <div>
                        <div className="d-flex gap-3 property-info">
                          <span>15% off</span>
                          <p className="room-details">{data.rooms}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2 footnote-medium">
                          <Star _color="#F9F9F9" _width={10} _height={10} />
                          <p>{data.rating}</p>
                          <p>•</p>
                          <p>{data.bed}</p>
                          <p>•</p>
                          <p>{data.pool}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}

              <div className="fav-btngroup">
                <button>
                  <CopyLink _color={"#F9F9F9"} _width={24} _height={24} />
                  <p>Copy Link</p>
                </button>
                <button>
                  <Mail _color={"#F9F9F9"} _width={22} _height={22} />
                  <p>Email</p>
                </button>
                <button>
                  <Facebook _color={"#F9F9F9"} _width={22} _height={22} />
                  <p>Facebook</p>
                </button>
                <button>
                  <Messenger _color={"#F9F9F9"} _width={22} _height={22} />
                  <p>Messenger</p>
                </button>
                <button>
                  <Twitter _color={"#F9F9F9"} _width={22} _height={22} />
                  <p>Twitter</p>
                </button>
                <button>
                  <Embed _color={"#F9F9F9"} _width={22} _height={22} />
                  <p>Embed</p>
                </button>
              </div>
              <div>
                <p className="footnote-medium">
                  Just a friendle reminder, anyone who has the link can view
                  this collection.
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <FooterComponent />
    </>
  );
};

export default Favorites;
