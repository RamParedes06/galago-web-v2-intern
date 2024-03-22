import React, { useState, useEffect } from "react";
import "../../styles/modalgallery.scss";
import { Close } from "../ui/svg/Close";
import ButtonComponent from "../ui/ButtonComponent";
import { CheckBorder } from "../ui/svg/CheckBorder";
import { ImageIcon } from "../ui/svg/ImageIcon";

function CustomModal({ isOpen, toggleModal }: any) {
  const closeModal = () => {
    toggleModal(false);
  };

  const [slideshow, setSlideShow] = useState(false);
  const [tabName, setTabName] = useState("Slideshow");

  function handleSetSlideShow() {
    setSlideShow(!slideshow);
    setTabName(slideshow ? "Slideshow" : "Gallery");
    console.log(tabName);
  }

  useEffect(() => {
    if (!isOpen) {
      setSlideShow(false);
      setTabName("Slideshow");
    }
  }, [isOpen]);

  const imageUrls = Array.from(
    { length: 12 },
    (_, index) =>
      `https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelGallery+Asssets/hotelgallery${
        index + 1
      }.png`
  );

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  const hotelData = [
    {
      hotelName: "Sample Hotel",
      hotelFacilities: [
        "Wifi",
        "Security",
        "Shopping Mall",
        "Sunrise",
        "Free Shops",
        "Sunrise",
        "Shopping Mall",
        "Free Shops",
        "Security",
        "Free Shops",
      ],
    },
    {
      hotelName: "Sample Hotel2",
      hotelFacilities: [
        "Wifi2",
        "Security2",
        "Shopping Mall2",
        "Sunrise2",
        "Free Shops2",
        "Sunrise2",
        "Shopping Mall2",
        "Free Shops2",
        "Security2",
        "Free Shops2",
      ],
    },
  ];
  console.log(hotelData[0]);

  return (
    <>
      {isOpen && (
        <div className="custom-modal-container">
          <div className="custom-gallery-modal">
            <div className="custom-modal-header">
              <div className="header-tabs" onClick={handleSetSlideShow}>
                <ImageIcon /> {tabName}
              </div>
              <div className="close" onClick={closeModal}>
                <Close />
              </div>
            </div>
            <div className="custom-modal-body">
              {!slideshow ? (
                <div>
                  <div className="gallery-images">
                    {imageUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Gallery ${index + 1}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h1> {/* <ImageGallery items={images} />; */}</h1>
                </div>
              )}

              <div className="gallery-facilities">
                <div>
                  <h1 className="ticket-headline-semibold">Facilities</h1>
                  <div>
                    {[hotelData[0]].map((hotel) => (
                      <div className="facilities">
                        {hotel.hotelFacilities.map((facility) => (
                          <p>
                            <span>
                              <CheckBorder />
                            </span>
                            {facility}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <ButtonComponent
                  buttonText="See Available Rooms"
                  className="default-btn callout-medium"
                  style={{ height: "60px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomModal;
