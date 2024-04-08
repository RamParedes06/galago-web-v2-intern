import React, { useEffect, useState } from "react";
import "../../styles/hotelresult.scss";
import ButtonComponent from "../ui/ButtonComponent";
import galago_picks from "../../resources/flightresults/galago_logo.png";
import { Link } from "react-router-dom";
import HotelPrice from "./HotelPrice";
import { HeartFill } from "../ui/svg/HeartFill";
import axios from "axios";
import ApiRoute from "../../apiRoutes";
import { Info } from "../ui/svg/Info";


function HotelInfoCard() {

  const [hotels, setHotels] = useState<any>();
  
  useEffect(() => {
    axios.post(ApiRoute.searchHotelList,{
      location: 'manila',
      checkInDate: '2024/05/01',
      checkOutDate: '2024/05/02',
      adults: 1,
      rooms: 1
    }).then((response)=>{
      setHotels(response.data.data.tbo)
    }) 
    .catch((error) => {
      console.error('Error fetching hotel data:', error);
    });
  },[])
useEffect(() => {
    console.log(hotels);
  }, [hotels]);



  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>

    
      {hotels?.map((hotel: any, index: React.Key) => {
        return (
        <div className="hotel-card-wrapper" key={index}>
          {index === 0 && (
            <div className="galago-picks body-semibold">
              <div className="galago-picks-logo">
                <img src={galago_picks} alt="" />
              </div>
              <p>Gally's Top Pick!</p>
            </div>
          )}
          <div className="hotel-info-card-container">
            <div className="hotel-card-img">
              <img src={hotel.Images[0]} alt="" loading="lazy"/>
              <div className="heart-fill">
                <HeartFill />
              </div>
            </div>

             {/* {
              hotel.Rooms.map((room: any, index: React.Key) => {
                return (
                  <div>
                    {room.Name[0]}
                  </div>
                )
            })} */}


           
            <div className="hotel-info-card">
              <div className="hotel-info-property">
                <h1 className="ticket-large-semibold">
                  {hotel.HotelName}
                </h1>
                <p className="py-1 callout-medium">
                  2 nights, July 24 - 26, Baguio City
                </p>
                <div className="cancellation-tag">
                  <p className="footnote-medium">Free Cancellation</p>
                </div>
              </div>
              <div className="hotel-availability">
                <div className="hotel-stars">
                  <p className="callout-medium">★ 4.6</p>
                </div>
                <p className="mt-1 footnote-medium mb-1 mt-2">Total Price</p>

                
                
                <div className="hotel-price">
                    <h1>{hotel.Currency}{hotel.Rooms[0].TotalFare}</h1>
                    <div className="hotel-discount">
                      <p>17% OFF</p>
                    </div>
                    <Info _width={20} _height={20} _color="#016e7f" />
                  </div>
                <p className="text-secondary mb-3 mt-1 footnote-medium">
                  Tax included
                </p>

                <Link to={"/hotel-profile"} onClick={scrollToTop}>
                  <ButtonComponent
                    buttonText="See Availability"
                    className="default-btn"
                    onClick={() => {
                      localStorage.setItem("hotels", JSON.stringify(hotels));
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        )
      }
        
      )}
    </>
  );
}

export default HotelInfoCard;
