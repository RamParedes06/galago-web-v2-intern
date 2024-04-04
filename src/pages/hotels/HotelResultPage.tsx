import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/ui/NavigationBar";
import { Container } from "react-bootstrap";
import "../../styles/hotelresult.scss";
import FloatingBanner from "../../components/flightresult/FloatingBanner";
import SearchFilter from "../../components/flightresult/SearchFilter";
import HotelInfoCard from "../../components/hotelresult/HotelInfoCard";
import FooterComponent from "../../components/ui/FooterComponent";
import axios from "axios";
import ApiRoute from "../../apiRoutes";
const HotelResultPage = () => {
  // const [hotel, setHotel] = useState<any>();
  
  // useEffect(() => {
  //   axios.post(ApiRoute.searchHotelList,{
  //     location: 'manila',
  //     checkInDate: '2024/05/01',
  //     checkOutDate: '2024/05/02',
  //     adults: 1,
  //     rooms: 1
  //   }).then((response)=>{
  //     setHotel(response.data.data.tbo)
  //     console.log(hotel)
  //   })
  // },[])

  return (
    <div>
      <NavigationBar />
      <div className="hotel-result-container">
        <div className="floating-banner-header-container">
          <div className="floating-banner-header"></div>
          <Container>
            <div className="floating-banner-overlap">
              <FloatingBanner showHotelContent={true} />
            </div>

            <div className="hotel-container">
              <div className="search-container">
                <SearchFilter showHotelContent={true} />
              </div>
              <div className="info-container">
                <div className="hotel-sort ticket-large-medium">
                  <p id="p-property">
                    <span className="heading-medium-bold">212</span> properties
                    found in{" "}
                    <span className="heading-medium-bold">Baguio City</span>
                  </p>
                  <p className="callout-medium">
                    Sort by: <span className="primary-0">Recommended</span>
                  </p>
                </div>
                <HotelInfoCard />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HotelResultPage;
