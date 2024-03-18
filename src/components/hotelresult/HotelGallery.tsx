import React from "react";
import "../../styles/hotelgallery.scss";

const HotelGallery = () => {
  return (
    <div className="property-gallery mt-3">
      <div className="img-big ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile1.png"
          alt=""
        />
      </div>
      <div className="img-small  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile2.png"
          alt=""
        />
      </div>
      <div className="img-small  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile3.png"
          alt=""
        />
      </div>
      <div className="img-small  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile4.png"
          alt=""
        />
      </div>
      <div className="img-small  ">
        <img
          src="https://galago-assets.s3.ap-southeast-1.amazonaws.com/Galago-v2-Assets/HotelProfile+Assets/hotelprofile5.png"
          alt=""
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default HotelGallery;
