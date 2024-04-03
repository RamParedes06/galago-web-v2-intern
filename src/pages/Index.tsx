import React, {useState} from "react";
import Homepage from "./Homepage";
import HelpCenter from "./HelpCenter";
import BookAndTrip from "./BookAndTrip";
import NavigationBar from "../components/ui/NavigationBar";
import FavoritesPage from "./FavoritesPage";
import Favorites from "./FavoritePages/Favorites";
import UserProfile from "./UserProfile";
import FlightResultPage from "./Flights/FlightResultPage";
import ApiRoute from "../apiRoutes";
import axios from "axios";

const index = () => {

 

  // axios.post(ApiRoute.searchOneWayFlights,{
  //   departureDate: '2024/05/01',
  //   originCode: 'MNL',
  //   destinationCode: 'SIN',
  //   passengers: {
  //     adults: 1,
  //   }
  // }).then((data)=>{
  //   console.log(data)
  // })

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default index;
