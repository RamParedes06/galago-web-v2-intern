import React, { useEffect, useState } from "react";
import "../../styles/hotelgallery.scss";
import CustomModal from "./CustomModal";

const HotelGallery = () => {
  // const [modalShow, setModalShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const toggleModal = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
    setModalIsOpen(isOpen);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalIsOpen]);

  return (
    <div className="property-gallery mt-3">
      <div className="property-img ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile1.png"
          alt=""
        />
      </div>
      <div className="property-img  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile2.png"
          alt=""
        />
      </div>
      <div className="property-img  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile3.png"
          alt=""
        />
      </div>
      <div className="property-img  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile4.png"
          alt=""
        />
      </div>

      <div className="property-img  " onClick={openModal}>
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile5.png"
          alt=""
        />
      </div>

      <CustomModal isOpen={modalIsOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default HotelGallery;
