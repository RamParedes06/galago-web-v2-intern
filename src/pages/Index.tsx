import React from "react";
import Homepage from "./Homepage";
import HelpCenter from "./HelpCenter";
import BookAndTrip from "./BookAndTrip";
import NavigationBar from "../components/ui/NavigationBar";
import FavoritesPage from "./FavoritesPage";
import Favorites from "./FavoritePages/Favorites";
import UserProfile from "./UserProfile";

const index = () => {
  return (
    <div>
      {/* <Homepage /> */}
      <UserProfile />
    </div>
  );
};

export default index;
