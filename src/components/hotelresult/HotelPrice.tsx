import React from "react";
import { Info } from "../ui/svg/Info";
import "../../styles/hotelresult.scss";

type HotelProps = {
  _hotelPrice?: string;
};

const HotelPrice: React.FC<HotelProps> = ({ _hotelPrice = "2500.00" }) => {
  return (
    <div className="hotel-price">
      <h1>{_hotelPrice}</h1>
      <div className="hotel-discount">
        <p>17% OFF</p>
      </div>
      <Info _width={20} _height={20} _color="#016e7f" />
    </div>
  );
};

export default HotelPrice;
